import React, { useEffect, useState } from "react";
import "./clientdata.css";

import { Navigate } from "react-router-dom"; // Import Redirect
import { useAuth } from "../Authentication/authcontext";

function AdminPanel() {
  const [data, setData] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState("");

  const { useremail, isAuthenticated } = useAuth;

  async function fetchDataAndUpdateState() {
    try {
      const response = await fetch(
        "https://dpapi-omega.vercel.app/api/getdata"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);

      setUserCount(jsonData.length);

      const currentDate = new Date();
      setLastUpdated(currentDate.toLocaleString());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchDataAndUpdateState();
    const pollingInterval = setInterval(fetchDataAndUpdateState, 3000);

    return () => {
      clearInterval(pollingInterval);
    };
  }, []);

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(
        `https://dpapi-omega.vercel.app/api/delete/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchDataAndUpdateState();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  if (isAuthenticated && useremail === "aryanbaba4199@gmail.com") {
    return (
      <>
        <div className="cdblank"></div>
        <div className="dataloader">
          <div className="dataintro">
            <h1 className="dream">Dream Planner's Booking Data</h1>
            <text className="serve">Last Updated: {lastUpdated}</text>
            <text className="total user">Total Users: {userCount}</text>
          </div>
          <div className="dataprovider">
            {data.map((item, index) => (
              <div key={item._id} className="datadiv">
                <h4>User: {index + 1}</h4>
                <h4>Name: {item.name}</h4>
                <h5>Email: {item.email}</h5>
                <h6>Mobile: {item.mobile}</h6>
                <h6>Address: {item.address}</h6>
                <h6>Function Type: {item.functionType}</h6>
                <h6>Services: {item.selectedServices.join(", ")}</h6>
                <h6>Message : {item.msg}</h6>
                <h6>Time : {item.time}</h6>
                <h6>Status : {item.status}</h6>
                <h6>Payments : {item.payment}</h6>
                <div className="crud">
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/9790/9790368.png"
                    alt="Delete"
                    width="40"
                    height="40"
                    onClick={() => handleDelete(item._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to="/" />; // Redirect to home page for other users
  }
}

export default AdminPanel;
