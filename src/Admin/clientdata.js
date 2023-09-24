import React, { useEffect, useState } from "react";
import './clientdata.css'

function AdminPanel() {
  const [data, setData] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');

  
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
      fetchDataAndUpdateState();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Delete Button
  async function deletedata(itemId) {
    try {
      const response = await fetch(`https://dpapi.vercel.app/api/delete/${itemId}`, {
        // const response = await fetch(`http://localhost:4000/api/delete/${itemId}`, {
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
        <h1 className="dream">Dream Planner's Booking Data</h1>
        <text className="serve">Last Updated: {lastUpdated}</text>
        <text className="total user">Total Users: {userCount}</text>
      </div>
      <div className="dataprovider">
        {data.map((item, index) => (
          <div key={item._id} className="datadiv">
            <h4>User: {index + 1}</h4>
            <h4>Name: {item.name}</h4>
            <h6>Mobile: {item.mobile}</h6>
            <h6>Address: {item.address}</h6>
            <h6>Function Type: {item.functionType}</h6>
            <h6>Services: {item.selectedServices.join(", ")}</h6>
            <h6>Message : {item.msg}</h6>
            <h6>Time : {item.time}</h6>
            <div className="crud">
              <img
                src="https://cdn-icons-png.flaticon.com/256/9790/9790368.png"
                alt="Delete"
                width='40'
                height='40'
                onClick={()=> deletedata(item._id)}
              />
              {/* <img
                src=""
                alt="Delete"
                width='30'
                height='30'
                onClick={deletedata}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/256/9790/9790368.png"
                alt="Delete"
                width='30'
                height='30'
                onClick={deletedata}
              /> */}

            </div>
          </div>
          
        ))}
        
      </div>
    </div>
    </>

  );
}

export default AdminPanel;
