import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function OrderDetails() {
  const { user, isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState([]); // State to store user booking data
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            // `http://localhost:4000/api/userdata/${user.email}`,
            `http://localhost:4000/api/userdata/${user.email}`,
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
  }, [isAuthenticated, user]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while data is being fetched
  }

  if (userData.length === 0) {
    return <div>No data available for this user.</div>; // Display a message if no data is found
  }

  return (
    <>
      <div className="cdblank"></div>
      <div className="dataloader">
        <div className="dataintro">
          <h1 className="dream">{user.email}</h1>
          <h2 className="planner">Your Booking Data</h2>
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
              <div className="crud">
                <img
                  src="https://cdn-icons-png.flaticon.com/256/9790/9790368.png"
                  alt="Delete"
                  width="40"
                  height="40"
                //   onClick={() => handleDelete(item._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
