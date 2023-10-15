import React from 'react'

const book = () => {
  window.location.href = '/booking';
};  

function icard() {
  return (
    
    <>
      <div className="pgblank"></div>
      <div className="pgcontainer">
        <div className="pgtitle">
          <h1 className="dream">Invitaion Card</h1>
          
        </div>
        <div className="pg2">
          <h3 className="serve">We Provide : </h3>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <img
            src='https://j7g5b3v8.stackpathcdn.com/wp-content/uploads/2017/06/ayushman-bhava.jpg'
              className="candid"
            />
            <h4 className="topicstyle">E-Card</h4>
            <text className="pg">
            At Dream Planner, we are your go-to destination for creating exquisite and personalized invitation e-cards for every type of function and celebration. We understand that the invitation is the first impression your guests will have of your event, and we are dedicated to making it a memorable one.
            </text>
          </div>
          <div className="pgtextdiv">
            <a href='https://www.youtube.com/watch?v=A7Cq_J87TFM&t=9s'>
            <img
              src='https://i.pinimg.com/564x/96/f2/0c/96f20cabac6ea8aa2e943add06a8a522.jpg'
              className="candid"
            />
            </a>
            <h4 className="topicstyle">Cinematic Teaser E-Card</h4>
            <text className="pg">
            At Dream Planner, we take the art of event invitations to the next level with our cinematic teaser E-cards. We understand that your event is not just a gathering; it's a special moment in your life, and we're here to capture the essence of that moment in a way that leaves a lasting impression on your guests.
            Our team of professional videographers and editors are skilled in the art of cinematography. We use high-quality equipment and techniques to create a visually stunning cinematic teaser that looks and feels like a movie trailer.
            </text>
          </div>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <h4 className="topicstyle">Tradional Invitaion Card</h4>
            <h4 className="topicstyle">Pesonalized Cinematic Intro</h4>
            
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
              <h4 className="pgalbum">E-Card</h4>
              <text className="pgalbumtext">
                Starts from____ <br />
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                  width="30.5rem"
                  className="rupee"
                />{" "}
                501/-
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Cinematic E-Card <br/>( Function Intro )</h4>
              <text className="pgalbumtext">
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                  width="30.5rem"
                  className="rupee"
                />
                2100/-
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Tradition Invitaion Card</h4>
              <text className="pgalbumtext">
                Starts From ____ 
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                  width="30.5rem"
                  className="rupee"
                />
                30/-piece

              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Payment Term</h4>
              <text className="pgalbumtext">
                Booking Time : 50% <br />
                Delivery Time : 50% <br />
              </text>
            </div>
            
            <div className="pricespec">
              <h4 className="pgalbum">Delivery Time</h4>
              <text className="pgalbumtext">1 Week</text>
            </div>
          </div>
          <div className="bookbtn">
            <button className="topicstyle" onClick={book}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );

}

export default icard