import React from 'react'
const book = () =>{
  window.location.href = '/bboking'
}

function mehndi() {
  return (
    
    
    <>
      <div className="pgblank"></div>
      <div className="pgcontainer">
        <div className="pgtitle">
          <h1 className="dream">Mehndi</h1>
          
        </div>
        <div className="pg2">
          <h3 className="serve">We Provide : </h3>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/1000X/uploads/member/1471786/1610426804_image6269.jpg?crop=6,65,789,444"
              className="candid"
            />
            <h4 className="topicstyle">Mehndi Artist</h4>
            <text className="pg">
            A mehndi artist is a skilled and creative professional who specializes in the application of mehndi, also known as henna, a natural dye made from the leaves of the henna plant. Mehndi art is an ancient form of body decoration and temporary tattooing that is deeply rooted in various cultural traditions, particularly in South Asia, the Middle East, and North Africa. A mehndi artist is responsible for designing and applying intricate mehndi patterns on clients' skin for various occasions and celebrations.
            </text>
          </div>
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/member/849429/1638272559_MIT_PB_9.JPG"
              className="candid"
            />
            <h4 className="topicstyle">Design</h4>
            <text className="pg">
            At Dream Planner, we specialize in the art of designer mehndi, bringing a touch of elegance and tradition to your special occasions. Our skilled and experienced mehndi artists are passionate about creating intricate and exquisite henna designs that reflect your unique style and personality
            </text>
          </div>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <h4 className="topicstyle">All type of Mehndi Design</h4>
            
            
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
                15000/- 
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

export default mehndi