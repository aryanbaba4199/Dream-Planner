import React, { useEffect, useState } from "react";
import { useAuth } from "../Authentication/authcontext";

function OrderDetails() {
  const { name, useremail, isAuthenticated } = useAuth();
  const [userData, setUserData] = useState([]); // State to store user booking data
  const [loading, setLoading] = useState(true); // State to track loading
  

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            `http://localhost:4000/api/userdata/${useremail}`,
            // `https://dpapi-omega.vercel.app/api/userdata/${useremail}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          setUserData(data); // Store user booking data in state
          setLoading(false); // Set loading to false
        } catch (error) {
          console.error("Error in retrieving data:", error);
        }
      };

      fetchUserData(); // Call the fetchUserData function when the component mounts
    }
  }, [isAuthenticated, name]); // Include 'name' as a dependency

  if (!isAuthenticated) {
    return (
      <div className="loading">
        <h2 className="topicstyle">You are not logged in.</h2>
        <p>Please log in to view your order details.</p>
      </div>
    ); 
  }

  if (loading) {
    return (
      <div className="loading">
        <h2 className="topicstyle">Loading...</h2>
        <p>If You are not logged in, loading will never be over</p>
      </div>
    ); // Display a loading indicator while data is being fetched
  }

  if (userData.length === 0) {
    return <div>No data available for this user.</div>; // Display a message if no data is found
  }

  return (
    <>
      <div className="cdblank"></div>
      <div className="dataloader">
        <div className="dataintro">
          <h1 className="dream">{name}'s</h1> {/* Display the user's name */}
          <h2 className="planner">Booking Data</h2>
        </div>
        <div className="dataprovider">
          <h2>Booking Details</h2>
          {userData.map((userItem, index) => (
            <div key={index} className="datadiv">
              <h4>Name: {userItem.name}</h4>
              <h6>Email: {userItem.email}</h6>
              <h6>Mobile: {userItem.mobile}</h6>
              <h6>Address: {userItem.address}</h6>
              <h6>Function Type: {userItem.functionType}</h6>
              <h6>
                Services:{" "}
                {Array.isArray(userItem.selectedServices)
                  ? userItem.selectedServices.join(", ")
                  : "N/A"}
              </h6>
              <h6>Message: {userItem.msg}</h6>
              <h6>Time: {userItem.time}</h6>
              <h6>Status : {userItem.status}</h6>
              <h6>Payments : {userItem.payment}</h6>
              <div className="crud">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
