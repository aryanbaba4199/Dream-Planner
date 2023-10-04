// Signin.js
import React, { useState } from 'react';
import './css/signup.css';
import { useAuth } from './authcontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [useremail, setUsername] = useState('');
  const [userpassword, setPassword] = useState('');
  const { login } = useAuth();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const signupRedirect = () => {
    window.location.href = 'https://dreamplanner.in/signup';
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const signinSubmit = async (e) => {
    
    e.preventDefault();

    try {
      // const response = await fetch("http://localhost:4000/api/signin", {
        const response = await fetch("https://dpapi-omega.vercel.app/api/signin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ useremail, userpassword }),
      });

      if (!response.ok) {
        toast('Email or password is incorrect');
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      if (responseData.message === 'Authentication successful') {
        toast('Login Success');
        login(responseData.username, useremail);
        // Redirect the user after successful login
        window.location.href = '/home'; // or use React Router for navigation
      } else {
        toast('Email or password is incorrect');
        console.error('Login failed:', responseData.message);
      }
    } catch (error) {
      toast("Try again After some time");
      console.error('Error sending data to the backend:', error);
    }
  };

  return (
    <>
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
                placeholder="Enter your Email"
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
            <div className='btndiver'>
              <h4 onClick={signinSubmit} type="submit" className="btnd">
                Sign In
              </h4>
            </div>
          </form>
          <div className='btndiver'>
            <h4 className='btnd' 
            onClick={signupRedirect}
            >Create New Account</h4>
          </div>
        </div>
        <div className='signupdp'>
          <h2 className='planner'>planner</h2>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default Signin;
