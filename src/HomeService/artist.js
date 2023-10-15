import React from 'react'

function artist() {
  const book = () => {
    window.location.href = "/booking"
  }
  return (
    
    <>
      <div className="pgblank"></div>
      <div className="pgcontainer">
        <div className="pgtitle">
          <h1 className="dream">Artist </h1>
          
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
            <h4 className="topicstyle">Bridal Makeup Artist</h4>
            <text className="pg">
            Bridal makeup is a specialized beauty service tailored for brides on their wedding day. It is designed to enhance the bride's natural beauty and create a stunning, long-lasting look that complements the wedding attire and overall theme. Bridal makeup artists are skilled professionals who work closely with the bride to achieve the desired look, taking into account the bride's individual features, style preferences, and the wedding's setting.
            </text>
          </div>
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/member/849429/1638272559_MIT_PB_9.JPG"
              className="candid"
            />
            <h4 className="topicstyle">Family Makeup</h4>
            <text className="pg">
            Family makeup services are offered to individuals and groups attending various types of events, such as weddings, parties, ceremonies, and celebrations. These services are provided by professional makeup artists who specialize in enhancing the appearance of family members, including parents, siblings, close relatives, and friends, to ensure they look their best and feel confident during the event.

            </text>
          </div>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <h4 className="topicstyle">All type of Makeup Artist</h4>
            
            
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

export default artist;
