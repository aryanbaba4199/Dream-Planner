import './homepart.css'

// src/ImageSlider.js
import React, { useState, useEffect } from "react";



const adimage = [
  "https://lh3.googleusercontent.com/p/AF1QipMgcdlKliUXcMwUhdSq-0WemWSCRFJQ8UZ3PMvc=s1360-w1360-h1020",
  "https://scontent.fpat4-1.fna.fbcdn.net/v/t39.30808-6/379652536_748371607302077_6726923290752939426_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=52f669&_nc_ohc=V7hmTjcJ-FUAX81KKS_&_nc_ht=scontent.fpat4-1.fna&oh=00_AfAnxCYohWx_SmbwKa2_uCjWEEj4hJsXl2Iumje49605Sw&oe=6509D9F4",
]


const images = [
  'https://cdn.vectorstock.com/i/1000x1000/36/15/up-to-10-percent-off-sale-discount-offer-price-vector-35713615.webp',
  'https://5.imimg.com/data5/SELLER/Default/2022/7/LQ/FD/VG/157093843/pre-wedding-video-shoot-services-500x500.jpg',
  'https://previews.123rf.com/images/manojchoughulephotography/manojchoughulephotography2006/manojchoughulephotography200600002/149549685-cooper-kalash-in-indian-traditional-wedding.jpg',
]

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000); // Adjust the interval as needed

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <>
    <div className='homeblank'></div>
    <div className='wholecontainer'>

      <div className="homeservices">
        <h2 className="serve">Our Services</h2>
        <button className="hsname">Wedding Photographer</button>
        <button className="hsname">Wedding Decorators</button>
        <button className="hsname">Wedding Venues</button>
        <button className="hsname">DJs</button>
        <button className="hsname">Wedding Cars</button>
        <button className="hsname">Bridal Makeup Artist</button>
        <button className="hsname">Mehndi Artist</button>
        <button className="hsname">Invitation Card</button>
        <button className="hsname">Choreographers</button>
        <button className="hsname">Artist Booking</button>
        <button className="hsname">Catering Service</button>
        <button className="hsname">Dancers</button>
        <button className="hsname">Honeymoon</button>
        <button className="hsname">Wedding Clothes</button>
      </div>

      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentImage * 300}px)`, // Adjust the slide width
          }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Image ${index + 1}`}
               className='slidepic' />
            </div>
          ))}
        </div>
      </div>



      <div className='adcontainer'>
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentImage * 300}px)`, // Adjust the slide width
          }}
        >
          {adimage.map((image, index) => (
            <div className="slidead" key={index}>
              <img src={image} alt={`Image ${index + 1}`}
                width='300'
                height='300'
              />
            </div>
          ))}
        </div>

        <div className='ad2'>
          <iframe
            width="300"
            height="200"
            className='videoad'
            src="https://www.youtube.com/embed/71GLTE0WCQY?autoplay=1&loop=1&controls=1&mute=1&playlist=71GLTE0WCQY"
            frameborder="0"
            allowfullscreen
          ></iframe>




        </div>

      </div>




    </div>

    </>
  );
};

export default ImageSlider;