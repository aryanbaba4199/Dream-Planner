import React, { useState, useEffect } from "react";
import "./homepart.css";

const images = [
  "https://i.pinimg.com/750x/99/64/51/99645143b39bce2cbbe115ca40c04fd8.jpg",
  "https://i.pinimg.com/564x/df/6d/02/df6d02e6e21d6bad6afbc922a739f961.jpg",
  "https://i.pinimg.com/564x/e2/1d/d8/e21dd8c143905300ee1a822dc2bc54b1.jpg",
  "https://i.pinimg.com/564x/ab/ae/46/abae4649b91a1671f8017e72c2eb00bd.jpg",
];

const Instapage = () => {
  window.location.href = "https://www.instagram.com/dreamplanner___/";
};

const Fbpage = () => {
  window.location.href = "fb.com";
};

const Ytpage = () => {
  window.location.href = "youtube.com";
};

const Whatsapp = () => {
  window.location.href = "https://wa.me/+917005742790";
};

const ImageSlider = () => {
  return (
    <>
      <div className="homeblank"></div>
      <div className="wholecontainer">
        <div className="firstc">
          <div className="fs-inside">
            <div className="fsheading">
              <h2 className="dream">Introducing</h2>
              <p className="fstext">
                Dream Planner is India's premier wedding planning and event
                management company, specializing in curating unforgettable
                moments and seamless celebrations. With a passion for crafting
                extraordinary experiences, we have earned a stellar reputation
                as the go-to choice for couples and clients seeking top-tier
                event planning services.
              </p>
            </div>
            <div className="fsimg">
                <div className="fsname-container">
                  <h2 className="dream" href="/">
                    Dream
                  </h2>
                  <h2 className="planner" href="/">
                    Plannner
                  </h2>
                </div>
              </div>

          </div>
        </div>
      </div>
      <div className="s1">
        <div className="s1-inside">
          <h2>Mandap Theme</h2>
          <p>
            "Our mandap theme work meticulously crafted by our talented theme
            designers. We specialize in creating enchanting and personalized
            mandap setups that reflect the unique vision and cultural
            preferences of each couple."
          </p>
        </div>
        <div className="s1-img">
          <img
            className="s1-imgprop"
            src="https://i.pinimg.com/564x/df/6d/02/df6d02e6e21d6bad6afbc922a739f961.jpg"
            alt="Mandap Theme"
          />
        </div>
      </div>
      <div className="s1">
        <div className="s1-inside">
          <h2>Floral Decoration</h2>
          <p>
            Our floral decoration services are a testament to the beauty of
            nature woven into the fabric of every wedding. Our expert florists
            and decorators work harmoniously to infuse vibrant colors, fragrant
            blooms, and artistic arrangements into your wedding venue. From
            stunning centerpieces and aisle decor to elaborate bridal bouquets
            and intricate floral backdrops, our floral designs add a touch of
            natural elegance, transforming your wedding into a fragrant and
            visually captivating celebration.
          </p>
        </div>
        <div className="s1-img">
          <img
            className="s1-imgprop"
            src="https://image.wedmegood.com/resized/800X/uploads/member/3265474/1660804521_image875.jpg"
            alt="Floral Decoration"
          />
        </div>

        <div className="s1-inside">
          <h2>Theme Entry</h2>
          <p>
            Our theme entry designs are the grand opening statements of your
            wedding celebration. Our creative team crafts awe-inspiring and
            thematic entryways that set the tone for your special day. Whether
            it's a traditional, modern, or destination-inspired theme, our goal
            is to create a captivating first impression that leaves a lasting
            memory. We pay meticulous attention to detail, ensuring that every
            element aligns seamlessly with your chosen theme, making your entry
            a mesmerizing experience for you and your guests.
          </p>
        </div>
        <div className="s1-img">
          <img
            className="s1-imgprop"
            src="https://image.wedmegood.com/resized/800X/uploads/member/3265474/1694080343_image9150.jpg"
            alt="Theme Entry"
          />
        </div>
      </div>
      <div className="s1">
        <div className="s1-inside">
          <h2>Dance Troupe & DJs</h2>
          <p>
            Our dance troupe services are a celebration of rhythm and culture.
            Our skilled dancers bring vibrant and energetic performances to your
            event, showcasing a fusion of traditional and contemporary dance
            forms. Whether it's classical Indian, Bollywood, or any other style,
            our talented troupe adds a dynamic and entertaining element to your
            celebration, leaving your guests enthralled and ready to hit the
            dance floor.
          </p>
        </div>
        <div className="s1-img">
          <img
            className="s1-imgprop"
            src="https://image.wedmegood.com/resized/800X/uploads/member/628710/1635741337_BY4B5735.JPG"
            alt="Dance Troupe & DJs"
          />
        </div>
      </div>

      <div className="service-container">
        <h2 className="serve">Our Services</h2>
        <div className="homeservices"></div>
        <button className="hsname">Photographer</button>
        <button className="hsname">Decorators</button>
        <button className="hsname">Wedding Venues</button>
        <button className="hsname">DJs</button>
        <button className="hsname">Wedding Cars</button>
        <button className="hsname">Bridal Makeup </button>
        <button className="hsname">Mehndi Artist</button>
        <button className="hsname">Invitation Card</button>
        <button className="hsname">Choreographers</button>
        <button className="hsname">Artist Booking</button>
        <button className="hsname">Catering Service</button>
        <button className="hsname">Dancers</button>
        <button className="hsname">Honeymoon</button>
        <button className="hsname">Wedding Clothes</button>
      </div>
      <h2 className="bottom">Contact us</h2>
      <div className="bottom">
        <div className="contact">
          <div className="location">
            <img
              className="imgt"
              src="https://cdn-icons-png.flaticon.com/256/535/535137.png"
              alt="Location"
              width="20"
              height="30"
            />
            <h3>Address</h3>
          </div>
          <div className="address-div">
            <p>Patna, Bihar</p>
          </div>
        </div>

        <div className="follow">
          <h2>Follow us</h2>
          <div className="social">
            <div className="in">
              <p className="in">Instagram</p>
              <img
                src="https://cdn-icons-png.flaticon.com/256/2111/2111463.png"
                onClick={Instapage}
                className="imgt"
                alt="Instagram"
              />
            </div>
            <div className="wt">
              <p className="wt">Whatsapp</p>
              <img
                src="https://cdn-icons-png.flaticon.com/256/3992/3992601.png"
                className="imgt"
                onClick={Whatsapp}
                alt="Whatsapp"
              />
            </div>
            <div className="yt">
              <p className="yt">Youtube</p>
              <img
                src="https://cdn-icons-png.flaticon.com/256/174/174883.png"
                className="imgt"
                onClick={Ytpage}
                alt="Youtube"
              />
            </div>
            <div className="fb">
              <p className="fb">Facebook</p>
              <img
                src="https://cdn-icons-png.flaticon.com/256/2504/2504903.png"
                className="imgt"
                onClick={Fbpage}
                alt="Facebook"
              />
            </div>
          </div>
        </div>

        <div className="partner">
          <h2>Our Channel Partner</h2>
          <div className="cp">
            <img
              src="https://media.licdn.com/dms/image/C4D16AQHz_u7EBZvUoA/profile-displaybackgroundimage-shrink_350_1400/0/1593088031766?e=1700697600&v=beta&t=QyX-KXFlsYOy0qCZXkkRpekwVKGiBMfNiEg8QHZc-P8"
              width="300rem"
              height="150rem"
              alt="Channel Partner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
