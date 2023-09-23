import "./homepart.css";
import Imagecarousal from "./slider";
import Slideone from "../../images/slideone.JPG";

// src/ImageSlider.js
import React, { useState, useEffect } from "react";
import Tp1img from "../../assets/tp1.png";

const adimage = [
  "https://lh3.googleusercontent.com/p/AF1QipMgcdlKliUXcMwUhdSq-0WemWSCRFJQ8UZ3PMvc=s1360-w1360-h1020",
  "https://scontent.fpat4-1.fna.fbcdn.net/v/t39.30808-6/379652536_748371607302077_6726923290752939426_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=52f669&_nc_ohc=V7hmTjcJ-FUAX81KKS_&_nc_ht=scontent.fpat4-1.fna&oh=00_AfAnxCYohWx_SmbwKa2_uCjWEEj4hJsXl2Iumje49605Sw&oe=6509D9F4",
];

const images = [
  "https://github.com/aryanbaba4199/images/blob/main/DSC_2902.JPG?raw=true",
  "https://github.com/aryanbaba4199/images/blob/main/DSC_3376.JPG?raw=true",
  "https://github.com/aryanbaba4199/images/blob/main/New%20Ideas%20for%20Mandap%20D%C3%A9cor%20at%20Your%20Wedding%20-%20VenueLook%20Blog.jpg?raw=true",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 2 ? 0 : prevImage + 1
      );
    }, 3000); // Adjust the interval as needed

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <>
      <div className="homeblank"></div>
      <div className="wholecontainer">
        
        
        <div
        
          className="slider"
          style={{
            transform: `translateX(-${currentImage * 44}rem)`,
          }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="slidepic"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="s1">
          <div className="s1-inside">
            <h2>Introducing Dream Planner</h2>
            <text>
              "Dream Planner" is a distinguished Wedding and Event Planning
              service that extends its expertise to clients across Pan India.
              Our mission is to craft exceptional and flawless experiences for
              weddings and a diverse array of events. At Dream Planner, we offer
              an all-encompassing suite of services, from inception to
              culmination, ensuring that your special day is nothing short of
              perfect.
            </text>
            <br />
            <text>
              Dream Planner revolves around you, our cherished client. Our
              promise is to ensure that every facet of your wedding or event is
              meticulously designed and executed with your wishes at the
              forefront. Let Dream Planner be your partner in transforming
              dreams into reality, creating indelible memories for weddings and
              events across Pan India.
            </text>
          </div>
          <div className="s1-img">
            <img
              className="s1-imgprop"
              src="https://github.com/aryanbaba4199/images/blob/main/img1.jpg?raw=true"
            />
          </div>
        </div>
        <div className="s1">
          <div className="s1-inside">
            <h2>Introducing Dream Planner</h2>
            <text>
              "Dream Planner" is a distinguished Wedding and Event Planning
              service that extends its expertise to clients across Pan India.
              Our mission is to craft exceptional and flawless experiences for
              weddings and a diverse array of events. At Dream Planner, we offer
              an all-encompassing suite of services, from inception to
              culmination, ensuring that your special day is nothing short of
              perfect.
            </text>
            <br />
            <text>
              Dream Planner revolves around you, our cherished client. Our
              promise is to ensure that every facet of your wedding or event is
              meticulously designed and executed with your wishes at the
              forefront. Let Dream Planner be your partner in transforming
              dreams into reality, creating indelible memories for weddings and
              events across Pan India.
            </text>
          </div>
          <div className="s1-img">
            <img
              className="s1-imgprop"
              src="https://image.wedmegood.com/resized/800X/uploads/member/3265474/1659710227_WhatsApp_Image_2021_01_31_at_12.41.51_PM.jpeg"
            />
          </div>
        </div>

      {/*Ad Section */}
      <div className="adcontainer"></div>

      {/*Template 1 */}
      <div className="tp1">
        <div>
          {/* Heading */}

          <div>{/*Dteails */}</div>
        </div>
        <div className="tpimgdiv">
          {/*Image*/}
          <img className="tp1img" src={Tp1img} />
        </div>
      </div>

      <div className="servie-container">
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
    </>
  );
};

export default ImageSlider;
