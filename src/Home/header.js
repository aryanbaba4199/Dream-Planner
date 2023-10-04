import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Home/Homepart/homepart.css";
import Nav from "react-bootstrap/Nav";

import { useAuth } from "../Authentication/authcontext";

// Social Netwoek handling

function Tabmenu() {
  const [toggle, settoggle] = useState("light");
  const { isAuthenticated, name, useremail, logout } = useAuth();
  console.log(isAuthenticated, name, "Email : ", useremail);

  const logintbtn = () => {
    window.location.href = "https://www.dreamplanner.in/signin";
  };

  const tooggleTheme = () => {
    if (toggle === "light") {
      settoggle("dark");
    } else {
      settoggle("light");
    }
  };
  useEffect(() => {
    document.body.className = toggle;
  }, [toggle]);

  const homebtn = () => {
    window.location.href = "/home";
  };

  return (
    <>
      <div className="headerblank"></div>

      <div className="wholeheader">
        <div className="tab">
          <div className="logo-holder">
            <img
              onClick={homebtn}
              src="https://i.pinimg.com/564x/bc/1d/5f/bc1d5f581156320cabdc3b5abe8a9edc.jpg"
              alt="Logo"
              // width="100"
              // height="100"
              className="imglogo"
              href="/home"
            />
            <div className="sitenamecontainer">
              <div className="snc">
                <Nav.displayName className="sitename" href="/home">
                  Dream
                </Nav.displayName>
                <Nav.displayName className="sitename1" href="/home">
                  Planner
                </Nav.displayName>
              </div>
              <div className="slogan">
                <text className="slogan">Your Events, Our Responsibility</text>
                <div className="auth">
                  {isAuthenticated && <text className="username">{name}</text>}
                </div>
              </div>
            </div>

            {/* for mobile devices */}
          </div>
        </div>
        <div className="part2">
          <Nav.Link className="bio" href="/home">
            Home
          </Nav.Link>
          <Nav.Link className="bio" href="/services">
            Services
          </Nav.Link>
          <Nav.Link className="bio" href="/booking">
            Booking
          </Nav.Link>
          <Nav.Link className="bio" href="/orderstatus">
            Cart
          </Nav.Link>
          <Nav.Link className="bio" href="/gallery">
            Glimpse
          </Nav.Link>
          <Nav.Link className="bio" href="/teams">
            Teams
          </Nav.Link>
          <Nav.Link className="bio" href="/career">
            Career
          </Nav.Link>
          <Nav.Link className="bio" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="bio" onClick={() => tooggleTheme()}>
            Dark
          </Nav.Link>
          {isAuthenticated ? (
            <Nav.Link
              className="bio"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              {" "}
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link
              className="bio"
              onClick={() =>
                logintbtn({
                  loginParams: { returnTo: "https:dreamplanner.in" },
                })
              }
            >
              Login
            </Nav.Link>
          )}
        </div>
        <div className="auth1">
          {isAuthenticated && <text className="username">{name}</text>}
        </div>
      </div>
    </>
  );
}

export default Tabmenu;
