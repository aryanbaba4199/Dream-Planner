import React, { useEffect, useState } from "react";
import './clientdata.css'

function AdminPanel() {
  const [data, setData] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');

  // Function to fetch data and update state
  async function fetchDataAndUpdateState() {
    try {
      const response = await fetch("http://localhost:4000/api/getdata");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);

      // Count the number of users
      setUserCount(jsonData.length);

      // Get the current date and time as the last updated timestamp
      const currentDate = new Date();
      setLastUpdated(currentDate.toLocaleString());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchDataAndUpdateState(); // Initial fetch
    const pollingInterval = setInterval(fetchDataAndUpdateState, 5000); // Poll every 5 seconds (adjust as needed)

    return () => {
      clearInterval(pollingInterval); 
    };
  }, []);

  return (
    <>    <div className="cdblank" ></div>
    <div className="dataloader">
      <div className="dataintro">
        <h1>Dream Planner's Booking Data</h1>
        <text>Last Updated: {lastUpdated}</text>
        <text className="total user">Total Users: {userCount}</text>
      </div>
      <div className="dataprovider">
        {data.map((item, index) => (
          <div key={item._id} className="datadiv">
            <h4>Serial No: {index + 1}</h4>
            <h4>Name: {item.name}</h4>
            <h6>Mobile: {item.mobile}</h6>
            <h6>Address: {item.address}</h6>
            <h6>Function Type: {item.functionType}</h6>
            <h6>Services: {item.selectedServices.join(", ")}</h6>
            <h6>Message : {item.msg}</h6>
            <h6>Time : {item.time}</h6>
          </div>
        ))}
      </div>
    </div>
    </>

  );
}

export default AdminPanel;
