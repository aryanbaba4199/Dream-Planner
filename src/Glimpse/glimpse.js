import React, { useState, useEffect } from "react";
import PostForm from "./postform";
import "./CSS/glimpse.css";
import { useAuth } from "../Authentication/authcontext";

function Posts() {
  const { useremail, isAuthenticated } = useAuth();
  const [posts, setPosts] = useState([]);

  // Function to fetch posts from your backend API
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/glimpse");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.log("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (post) => {
    try {
      const response = await fetch("http://localhost:4000/api/glimpse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        console.log("Post created successfully");

        fetchPosts();
      } else {
        console.log("Post creation failed");
      }
    } catch (err) {
      console.log("Error Caught:", err);
    }
  };

  return (
    <>
      <div className="glimpseblank"></div>
      <div className="create-container">
        {isAuthenticated && useremail === "aryanbaba4199@gmail.coma" && (
          <>
            <h1>Create a Post</h1>
            <PostForm onSubmit={handleSubmit} />
          </>
        )}
      </div>
      <div className="glimpse-container">
        <h1 className="dream">Glimpse</h1>
        <div className="post-container">
          <div className="gpextrablank"></div>
          {posts.map((post) => (
            
            <div key={post._id} className="post-inside">
              
              <img src={post.image} alt="Post" className="glimpse-pic" />
              <div className="header-div">
                <h2 className="gp-header">{post.header}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
