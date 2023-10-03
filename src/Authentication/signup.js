import React, { useState } from 'react';
import './css/signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [useremail, setEmail] = useState('');
  const [userpassword, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signupSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    try {
      // const response = await fetch("http://localhost:4000/api/signup", {
        const response = await fetch("https://dpapi-omega.vercel.app/api/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, userpassword, useremail }), // Include email in the request body
      });
  
      if (!response.ok) {
        toast('Email Already Registered');
        console.log("response not ok ");
        throw new Error('Network response was not ok');
      }
      toast("Registration Successful");
      const responseData = await response.json();
      
      // Check the response message for registration status
      if (responseData.message === 'Registration successful') {
        toast('Registration Success');
        
        
        console.log('Registration successful');
      } else if (responseData.message === 'You are already registered') {
        // Email is already registered, display an error message to the user
        console.log('Email is already registered');
        // You can set a state variable or use an alert to display the message to the user
      }
    } catch (error) {
      toast("Try again After some time")
      console.error('Error sending data to the backend:', error);
    }
  };
  

  return (
    <>
    <div className="SignUp">
      <div className='signupdp'>
        <h2 className='dream'>Dream</h2>
      </div>
      <div className="container">
        <h2 className="logo">Sign Up</h2>
        <form onSubmit={signupSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={useremail}
              onChange={handleEmailChange}
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
          <div className='btndiver'>
            <h4 type="submit" className="btnd">
              Sign Up
            </h4>
          </div>
        </form>
      </div>
      <div className='signupdp'>
        <h2 className='planner'>Planner</h2>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
}

export default SignUp;
