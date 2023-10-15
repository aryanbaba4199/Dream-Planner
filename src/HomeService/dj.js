import React from 'react'

function dj() {
  const book = () => {
    window.location.href = "./booking"
  }
  return (
    <>
      <div className="pgblank"></div>
      <div className="pgcontainer">
        <div className="pgtitle">
          <h1 className="dream">Music & DJ'S</h1>
          
        </div>
        <div className="pg2">
          <h3 className="serve">We Provide : </h3>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/member/849429/1638292826_IMG_6960.JPG"
              className="candid"
            />
            <h4 className="topicstyle">DJ System</h4>
            <text className="pg">
            A DJ system, short for Disc Jockey system, is a professional audio setup used by DJs to mix and play music at various events and venues. It typically includes equipment like turntables or CDJs, a mixer, speakers, headphones, and often a laptop or digital controller. DJs use this system to seamlessly blend tracks, create unique remixes, and curate a dynamic musical experience for their audience. DJ systems vary in complexity, with some setups tailored for small gatherings and others designed for large club events or festivals.
            </text>
          </div>
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/member/849429/1638272559_MIT_PB_9.JPG"
              className="candid"
            />
            <h4 className="topicstyle">DJ'S</h4>
            <text className="pg">
            A DJ artist, also known as a disc jockey or DJ, is a skilled music professional who specializes in selecting and mixing music tracks to entertain audiences at parties, clubs, events, and more. DJ artists use their creativity and knowledge of music genres to craft unique sets that cater to the preferences of their audience. They often incorporate various techniques such as beatmatching, scratching, and effects to create a seamless and engaging musical journey. DJ artists are essential in setting the mood and energy of an event, making them a key part of the entertainment industry.
            </text>
          </div>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <h4 className="topicstyle">Full Sound Setup</h4>
            
            
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
                Starts from____ <br />
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                  width="30.5rem"
                  className="rupee"
                />{" "}
                21000/- 
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Dj Artist</h4>
              <text className="pgalbumtext">
                Start From ___
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                  width="30.5rem"
                  className="rupee"
                />
                10000/-
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Travel Cost</h4>
              <text className="pgalbumtext">
                Outstation traverl & stay charges <br />
                borne by client
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Payment Term</h4>
              <text className="pgalbumtext">
                Booking Time : 50% <br />
                Before Execution : 30% <br />
                Before Event : 20%
              </text>
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Extra Service</h4>
              <text className="pgalbumtext">
                providing extra service <br />
                cost : 10% per hour of Booking Amount
              </text>
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
  )
}

export default dj