  import React, { useEffect, useState } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { useAuth0 } from "@auth0/auth0-react";
  import "../Home/Homepart/homepart.css";
  import WeddingBooking from "../Booking/booking";
  import ServicesList from "../Services/service";
  import Homepart from "./Homepart/homepart";
  import Teams from "../Teams/teams";
  import About from "../about/about";
  import Career from "../career/career";
  import FeedbackForm from "../Admin/feedback";
  import Signin from "../Authentication/signin";
  import Signup from "../Authentication/signup";
  import OrderStatus from "../Order/order";

  // Home Service Component
  import Photography from "../HomeService/photography"
  import Decorators from "../HomeService/decor"
  import Venue from "../HomeService/venue"
  import DJ from "../HomeService/dj"
  import WedCar from "../HomeService/wedcar"
  import Makeup from "../HomeService/makeup"
  import Mehndi from "../HomeService/mehndi"
  import Icard from "../HomeService/icard"
  import Chreographer from "../HomeService/chreograph"
  import Artist from "../HomeService/artist"
  import Cater from "../HomeService/cater"
  import Dance from "../HomeService/dancer"
  import Honeymoon from "../HomeService/honeymoon"
  import Clothes from "../HomeService/clothes"





  import Nav from "react-bootstrap/Nav";

  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import AdminPanel from "../Admin/clientdata";

  // Social Netwoek handling

  function Tabmenu() {
    const [toggle, settoggle] = useState("dark-theme");
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    


    const tooggleTheme = () => {
      if (toggle === "dark-theme") {
        settoggle("light-theme");
      } else {
        settoggle("dark-theme");
      }
    };
    useEffect(() => {
      document.body.className = toggle;
    }, [toggle]);
    
    const homebtn = () =>{
      window.location.href = "/home";
    }

    return (
      <>
        <div className="headerblank"></div>
        <Router>
          <div className="wholeheader">
            <div className="appdownload"></div>
            <div className="tab">
              <div className="logo-holder">
                <img
                  onClick={homebtn}
                  src="https://i.pinimg.com/564x/bc/1d/5f/bc1d5f581156320cabdc3b5abe8a9edc.jpg"
                  alt="Logo"
                  width="100"
                  height="100"
                  className="imglogo"
                  href="/home"
                  
                />
                <div className="sitenamecontainer">
                  <div className="snc">
                    <Nav.displayName className="sitename" href="/">
                      Dream
                    </Nav.displayName>
                    <Nav.displayName className="sitename1" href="/">
                      Planner
                    </Nav.displayName>
                  </div>
                  <div className="slogan">
                    <text className="slogan">
                      Your Events, Our Responsibility
                    </text>
                  </div>
                </div>
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
                Darkmode
              </Nav.Link>
            </div>
            <div className="auth">
              
              {isAuthenticated && <text className="username">{user.name}</text>}
              {
                isAuthenticated ? (
                  <h6
                  className="auth0"
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out</h6>
                ):(
                <h5 className="auth0" onClick={() => loginWithRedirect()}>Log In</h5>
                )}
            </div>
          </div>

          <Routes>
            <Route exact path="/" element={<Homepart />} />
            <Route path="/home" element={<Homepart />} />
            <Route path="/services" element={<ServicesList />} />
            <Route path="/booking" element={<WeddingBooking />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/orderstatus" element={<OrderStatus />} />

            {/* Home service routes */}
            <Route path="/photographyandVideoGraphy" element={<Photography/>} />;
            <Route path= "/decorators" element={<Decorators/>} />;
            <Route path= "/venues" element={<Venue/>} />;
            <Route path= "/dj" element={<DJ/>} />;
            <Route path= "/car" element={<WedCar/>} />;
            <Route path= "/bridalmakeup" element={<Makeup/>} />;
            <Route path= "/mehndi" element={<Mehndi/>} />;
            <Route path= "/invitationCard" element={<Icard/>} />;
            <Route path= "/chreography" element = {<Chreographer/>}/>
            <Route path= "/artist" element = {<Artist/>}/>
            <Route path= "/catering" element = {<Cater/>}/>
            <Route path= "/dancer" element = {<Dance/>}/>
            <Route path= "/honeymoon" element = {<Honeymoon/>}/>
            <Route path= "/clothes" element = {<Clothes/>}/>
          </Routes>
        </Router>
      </>
    );
  }

  export default Tabmenu;
