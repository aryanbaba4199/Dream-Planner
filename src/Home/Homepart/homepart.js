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

const Instapage = () => {
  window.location.href = 'https://www.instagram.com/dreamplanner___/'
}
const Fbpage = () => {
  window.location.href = 'fb.com'
}
const Ytpage = () => {
  window.location.href = 'youtube.com'
}

const Whatsapp = ()=>{
  window.location.href = "https://wa.me/+917005742790"
}

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
          <h2>Mandap Theme</h2>
          <text>
            "Our mandap theme work meticulously crafted by our talented theme
            designers. We specialize in creating enchanting and personalized
            mandap setups that reflect the unique vision and cultural
            preferences of each couple.
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
          <h2>Floral Decoration</h2>
          <text>
            Our floral decoration services are a testament to the beauty of
            nature woven into the fabric of every wedding. Our expert florists
            and decorators work harmoniously to infuse vibrant colors, fragrant
            blooms, and artistic arrangements into your wedding venue. From
            stunning centerpieces and aisle decor to elaborate bridal bouquets
            and intricate floral backdrops, our floral designs add a touch of
            natural elegance, transforming your wedding into a fragrant and
            visually captivating celebration.
          </text>
        </div>
        <div className="s1-img">
          <img
            className="s1-imgprop"
            src="https://image.wedmegood.com/resized/800X/uploads/member/3265474/1660804521_image875.jpg"
          />
        </div>

        <div className="s1-inside">
          <h2>Theme Entry</h2>
          <text>
            Our theme entry designs are the grand opening statements of your
            wedding celebration. Our creative team crafts awe-inspiring and
            thematic entryways that set the tone for your special day. Whether
            it's a traditional, modern, or destination-inspired theme, our goal
            is to create a captivating first impression that leaves a lasting
            memory. We pay meticulous attention to detail, ensuring that every
            element aligns seamlessly with your chosen theme, making your entry
            a mesmerizing experience for you and your guests.
          </text>
        </div>
        <div className="s1-img">
          <img
            className="s1-imgprop"
            src="https://image.wedmegood.com/resized/800X/uploads/member/3265474/1694080343_image9150.jpg"
          />
        </div>
      </div>
      <div className="s1">
        <div className="s1-inside">
          <h2>Dance Troupe & DJ's</h2>
          <text>
            Our dance troupe services are a celebration of rhythm and culture.
            Our skilled dancers bring vibrant and energetic performances to your
            event, showcasing a fusion of traditional and contemporary dance
            forms. Whether it's classical Indian, Bollywood, or any other style,
            our talented troupe adds a dynamic and entertaining element to your
            celebration, leaving your guests enthralled and ready to hit the
            dance floor.
          </text>
        </div>
        <div className="s1-img">
          <img
            className="s1-imgprop"
            src="https://image.wedmegood.com/resized/800X/uploads/member/628710/1635741337_BY4B5735.JPG"
          />
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
      <h2 className="bottom">Contact us</h2>
      <div className="bottom">
        <div className="contact">
          <div className="location">
            <img
              className="imgt"
              src="https://cdn-icons-png.flaticon.com/256/535/535137.png"
              width="20"
              height="30"
            />

            <h3>Address</h3>
          </div>
          <div className="address-div">
            <text>Patna, Bihar</text>
          </div>
        </div>

        <div class="follow">
          <h2>Follow us</h2>
          <div class="social">
            <div class="in">
              <text>Instagram</text>
              <img 
              src="https://cdn-icons-png.flaticon.com/256/2111/2111463.png"
              onClick={Instapage}
              className="imgt"
              />
            </div>
            <div className="wt">
              <text>Whatsapp</text>
              <img src="https://cdn-icons-png.flaticon.com/256/3992/3992601.png"
              className="imgt"
              onClick={Whatsapp}
              />
            </div>
            <div class="yt">
              <text>Youtube</text>
              <img src="https://cdn-icons-png.flaticon.com/256/174/174883.png"
                className="imgt"
                onClick={Ytpage}
              />
            </div>
            <div class="fb" >
              <text>Facebook</text>
              <img src="https://cdn-icons-png.flaticon.com/256/2504/2504903.png"
              className="imgt"
              onClick={Fbpage}
              />
               
            </div>
          </div>
        </div>

        <div className="partner">
          <h2>Our Channel Partner</h2>
          <div className="cp">
            <img 
            src="https://media.licdn.com/dms/image/C4D16AQHz_u7EBZvUoA/profile-displaybackgroundimage-shrink_350_1400/0/1593088031766?e=1700697600&v=beta&t=QyX-KXFlsYOy0qCZXkkRpekwVKGiBMfNiEg8QHZc-P8"
            width='300rem'
            height='150rem'
            />
          </div>
        </div>
      </div>
      <div />
    </>
  );
};

export default ImageSlider;
