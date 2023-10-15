// routes.js

import React from "react";
import { Route, Router, Routes } from "react-router-dom";

// Import your route components here
import Homepart from "../Home/Homepart/homepart";
import ServicesList from "../Services/service";
import WeddingBooking from "../Booking/booking";
import Teams from "../Teams/teams";
import About from "../about/about";
import Glimpse from "../Glimpse/glimpse";
import Career from "../career/career";
import FeedbackForm from "../Admin/feedback";
import Signin from "../Authentication/signin";
import Signup from "../Authentication/signup";
import OrderStatus from "../Order/order";
import Admin from "../Admin/clientdata";
import Sitemap from "./sitemap";

// Home Service Component
import Photography from "../HomeService/photography";
import Decorators from "../HomeService/decor";
import Venue from "../HomeService/venue";
import DJ from "../HomeService/dj";
import WedCar from "../HomeService/wedcar";
import Makeup from "../HomeService/makeup";
import Mehndi from "../HomeService/mehndi";
import Icard from "../HomeService/icard";
import Chreographer from "../HomeService/chreograph";
import Artist from "../HomeService/artist";
import Cater from "../HomeService/cater";
import Dance from "../HomeService/dancer";
import Honeymoon from "../HomeService/honeymoon";
import Clothes from "../HomeService/clothes";

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Homepart />} />
      <Route path="/home" element={<Homepart />} />
      <Route path="/services" element={<ServicesList />} />
      <Route path="/booking" element={<WeddingBooking />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/feedback" element={<FeedbackForm />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/gallery" element={<Glimpse/>} />
      <Route path="/orderstatus" element={<OrderStatus />} />
      <Route path="/sitemap" element={<Sitemap />} />

      {/* Home service routes */}
      <Route path="/photographyandVideoGraphy" element={<Photography />} />
      <Route path="/decorators" element={<Decorators />} />
      <Route path="/venues" element={<Venue />} />
      <Route path="/dj" element={<DJ />} />
      <Route path="/car" element={<WedCar />} />
      <Route path="/bridalmakeup" element={<Makeup />} />
      <Route path="/mehndi" element={<Mehndi />} />
      <Route path="/invitationCard" element={<Icard />} />
      <Route path="/chreography" element={<Chreographer />} />
      <Route path="/artist" element={<Artist />} />
      <Route path="/catering" element={<Cater />} />
      <Route path="/dancer" element={<Dance />} />
      <Route path="/honeymoon" element={<Honeymoon />} />
      <Route path="/clothes" element={<Clothes />} />
    </Routes>
    
  );
}

export default AppRoutes;
