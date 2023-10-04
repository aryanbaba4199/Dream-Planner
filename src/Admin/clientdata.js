import React, { useEffect, useState } from "react";
import './clientdata.css'
import OrderDetails from "../Order/order";
import { useAuth } from "../Authentication/authcontext";


function AdminPanel() {
  const [data, setData] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');
  const [packet, setPacket] = useState([]);

  const { user, isAuthenticated } = useAuth();
  // const usermail = isAuthenticated ? user.email : "";

  async function fetchDataAndUpdateState() {
    try {
      // const response = await fetch("http://localhost:4000/api/getdata");
      const response = await fetch("https://dpapi-omega.vercel.app/api/getdata");
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
    const pollingInterval = setInterval(fetchDataAndUpdateState, 3000); // Poll every 3 seconds (adjust as needed)

    return () => {
      clearInterval(pollingInterval); 
    };
    
  }, []);
  

  

  
  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/delete/${itemId}`, {
        // const response = await fetch(`https://dpapi-omega.vercel.app/api/delete/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchDataAndUpdateState();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

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
                  width='40'
                  height='40'
                  onClick={() => handleDelete(item._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {packet && <OrderDetails packet={packet}/>} {/* Render OrderDetails component if packet is not null */}
    </>
  );
}

export default AdminPanel;