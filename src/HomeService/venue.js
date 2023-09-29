import React from 'react'

function venue() {
  const book = ()=>{
    window.location.href = '/booking';
  }
  return (
    <>
      <div className="pgblank"></div>
      <div className="pgcontainer">
        <div className="pgtitle">
          <h1 className="dream">Venues</h1>
        </div>
        <div className="pg2">
          <h3 className="serve">Services : </h3>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/project/254162/1688645952_image2617.jpg"
              className="candid"
            />
            <h4 className="topicstyle">Banquet Hall</h4>
            
          </div>
          <div className="pgtextdiv">
            <img
              className='candid'
              src="https://image.wedmegood.com/resized/800X/uploads/member/669269/1601210671_image9501.jpg"
            />
            <h4 className="topicstyle">Farm House</h4>
            
          </div>
          
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/member/444432/1641545104_WhatsApp_Image_2021_10_29_at_8.46.27_PM__2_.jpeg"
              className="candid"
            />
            <h4 className="topicstyle">Resorts</h4>
            
          </div>
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/member/12150/1693200719_the_lalit_jaipur__21_.jpg"
              className="candid"
            />
            <h4 className="topicstyle">Destination Wedding</h4>
            
          </div>
          
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
          <h4 className="topicstyle">Small Party Hall</h4>
          <h4 className="topicstyle">4* and Above Hotels</h4>
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
                /> 1,00,000 / day
                
              </text>
            </div>
            
            
            <div className="pricespec">
              <h4 className="pgalbum">Payment Terms</h4>
              <text className="pgalbumtext">
                Booking Time : 50% <br/>
                Before one day of Event : 100% <br/>
                
              </text>
              
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Extra Service</h4>
              <text className="pgalbumtext">
                Providing extra service   <br/>
                cost : 100%/day of booking
                
              </text>
            </div>
            
            
            </div>
            <div className="bookbtn">
            
            
            <button className="topicstyle" onClick={book}>Book Now</button>
            </div>
          </div>
          

      </div>
      
    </>
  )
}

export default venue