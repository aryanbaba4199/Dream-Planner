import React, { useState } from 'react';
import './CSS/glimpse.css';

function PostForm({ onSubmit }) {
  const [image, setImage] = useState('');
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a post object with the user's input
    const post = { image, header, description };
    // Pass the post object to the onSubmit function for further processing
    onSubmit(post);
    // Clear the form fields
    setImage('');
    setHeader('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="header">Header:</label>
        <input
          type="text"
          id="header"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Post</button>
      </div>
    </form>
  );
}

export default PostForm;
