import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Home/Homepart/homepart.css'
import WeddingBooking from "../Booking/booking";
import Logoa from '../assets/logo.gif'
import ServicesList from "../Services/service";
import Homepart from './Homepart/homepart'
import Teams from "../Teams/teams";
import About from "../about/about";
import Career from "../career/career"
import FeedbackForm from "../Admin/feedback";





import Nav from "react-bootstrap/Nav";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPanel from "../Admin/clientdata";



// Social Netwoek handling


function Tabmenu() {

  const handleDownloadClick = () => {
    window.location.href = "https://www.example.com/app-download";
  };

  const Instapage = () => {
    window.location.href = 'https://www.instagram.com/dreamplanner___/'
  }
  const Fbpage = () => {
    window.location.href = 'fb.com'
  }
  const Ytpage = () => {
    window.location.href = 'youtube.com'
  }



  return (

    <>
    <div className="headerblank"></div>
      <Router>
        <div className="wholeheader">
        <div className="appdownload">
    </div>
          <div className="tab">

            <div className="logo-holder">
              <img
                src={Logoa} // Use the imported logo variable
                alt="Logo"
                width="100"
                height="100"
                className="imglogo"
                href="/home"
              />
              <div className="sitenamecontainer">
                <div className="snc">
                  <Nav.displayName className='sitename' href="/">Dream</Nav.displayName>
                  <Nav.displayName className='sitename1' href="/">Plannner</Nav.displayName>

                </div>
                <div className="slogan">
                  <text className="slogan">Your Events, Our Responsibility</text>
                </div>
              </div>
            </div>
          </div>
          <div className="part2">
            <Nav.Link className="bio" href="/home">Home</Nav.Link>
            <Nav.Link className="bio" href="/services">Services</Nav.Link>
            <Nav.Link className="bio" href="/booking">Booking</Nav.Link>
            <Nav.Link className="bio" href="/gallery">Glimpse</Nav.Link>
            <Nav.Link className="bio" href="/teams">Teams</Nav.Link>
            <Nav.Link className="bio" href="/career">Career</Nav.Link>
            <Nav.Link className="bio" href="/about">About</Nav.Link>
          </div>

          {/* Add other navigation links as needed */}
          <div className="socialcon">
            <img
              src="https://cdn-icons-png.flaticon.com/256/2111/2111463.png"
              width="25"
              height="25"
              alt="Insta"
              onClick={Instapage}
              className="social-iconin"
            />

            <img
              width="25"
              height="25"
              alt="Insta"
              onClick={Fbpage}
              className="social-icon"
              src="https://cdn-icons-png.flaticon.com/256/4494/4494475.png"

            />

            <img
              width="25"
              height="25"
              alt="Insta"
              onClick={Ytpage}
              className="social-icon"
              src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
            />

          </div>
        </div>



        <Routes>
          <Route exact path="/" element={<Homepart />} />
          <Route path="/home" element={<Homepart />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/booking" element={<WeddingBooking />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/about" element={<About/>}/>
          <Route path= "/career" element = {<Career/>}/>
          <Route path="/feedback" element = {<FeedbackForm/>}/>
          <Route path="/admin" element = {<AdminPanel/>}/>

        </Routes>

      </Router>
    </>
  );
}

export default Tabmenu;