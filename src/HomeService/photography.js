import React from "react";
import "./hscss/photography.css";
function photography() {

  const book = ()=>{
    window.location.href = '/booking';
  }
  return (
    <>
      <div className="pgblank"></div>
      <div className="pgcontainer">
        <div className="pgtitle">
          <h1 className="dream">Photography</h1>
          <h6 className="slogan">&</h6>
          <h1 className="planner">Videography</h1>
        </div>
        <div className="pg2">
          <h3 className="serve">We Provide : </h3>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/images/2564a6db7a6d48988dd093d925c01fa6realwedding/IMG_9181.jpeg"
              className="candid"
            />
            <h4 className="topicstyle">Candid Photography</h4>
            <text className="pg">
              Candid photography captures natural expressions and moments that
              might not be possible to reproduce in a studio or posed photo
              shoot. This style of photography is most often used to capture
              people in their natural state without them noticing the camera.
            </text>
          </div>
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/images/0ef029bb8e1e4e71bcedb5cd79ed48acrealwedding/Image-117.jpg"
              className="candid"
            />
            <h4 className="topicstyle">cinematic Videography</h4>
            <text className="pg">
              A cinematic video is one that looks like a movie. The movie
              business has evolved significantly in terms of aspect ratio,
              color, and lighting techniques throughout the years. When we say
              "cinematic," we mean that it appears like a movie you'd watch in a
              theater.
            </text>
          </div>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
          <h4 className="topicstyle">Candid Cinematography</h4>
          <h4 className="topicstyle">Cinematic Photography</h4>
          <h4 className="topicstyle">Couple Portaraight</h4>
          <h4 className="topicstyle">& Many More</h4>

            
          </div>

          
          
          
        </div>
        <div className="pgbottom">
          <div className="line"></div>
          <span className="pricing">
            <h2 className="dream">Pricing</h2>
            
            </span>
            <div className="line"></div>
            <div className="pg-bottom-holder">
            <div className="pricespec">
              <h4 className="pgalbum">Package</h4>
              <text className="pgalbumtext">
                Starts from____ <br/> 
                <img
                src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                width='30.5rem'
                className="rupee"
                /> 51000 / day
                
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Album</h4>
              <text className="pgalbumtext">
                <img
                src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                width='30.5rem'
                className="rupee"
                />
                10,000 per 40 Pages
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Travel Cost</h4>
              <text className="pgalbumtext">
                Outstation traverl & stay charges <br/>
                borne by client
                
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Payment Term</h4>
              <text className="pgalbumtext">
                Booking Time : 50% <br/>
                Before Event : 80% <br/>
                After Event : 20%
              </text>
              
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Extra Service</h4>
              <text className="pgalbumtext">
                providing extra service   <br/>
                cost : 5% per hour of Booking Amount
                
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Delivery Time</h4>
              <text className="pgalbumtext">
                2 Week 
              </text>
            </div>
            
            </div>
            <div className="bookbtn">
            
            
            <button className="topicstyle" onClick={book}>Book Now</button>
            </div>
          </div>
          

      </div>
      
    </>
  );
}

export default photography;
