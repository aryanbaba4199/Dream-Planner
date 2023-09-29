import React, { useState } from 'react';
import './css/signup.css';

function Signin() {
  const [useremail, setUsername] = useState('');
  const [userpassword, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

// Sending data to the server
const signinSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  try {
    const response = await fetch("http://localhost:4000/api/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ useremail, userpassword }),
    });
    console.log('Response from backend:', response);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('Response from backend:', responseData);

    // If login is successful, redirect to the homepage
    if (responseData.message === 'Authentication successful') {
      window.location.href = '/home'; // Replace '/homepage' with your actual homepage route
    }
  } catch (error) {
    console.error('Error sending data to the backend:', error);
  }
};


  return (
    <div className="App">
        <div className='signupdp'>
            <h2 className='dream'>Dream</h2>
        </div>
      <div className="container">
        
        <h2 className="logo">User Sign-In</h2>
        <form onSubmit={signinSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Email "
              value={useremail}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={userpassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='btndiv'>
          <button type="submit" className="btn" onClick={signinSubmit}>
            Sign In
          </button>
          </div>
        </form>
      </div>
      <div className='signupdp'>
            <h2 className='planner'>planner</h2>
        </div>
    </div>
  );
}

export default Signin;
