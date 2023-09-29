import React from 'react'

function decor() {
  const book = ()=>{
    window.location.href = '/booking';
  }
  return (
    <>
      <div className="pgblank"></div>
      <div className="pgcontainer">
        <div className="pgtitle">
          <h1 className="dream">Decoration</h1>
        </div>
        <div className="pg2">
          <h3 className="serve">We Provide : </h3>
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <img
              src="https://5.imimg.com/data5/RP/GK/VE/IOS-8162246/product-jpeg-500x500.png"
              className="candid"
            />
            <h4 className="topicstyle">Floral Mandap</h4>
            <text className="pg">
            The floral Mandap serves as the altar for Indian weddings, specifically for Hindu and Jain ceremonies. Adorned with floral decorations and bells, this wooden structure serves as the stage for which guests and family witness the couple wed.
            </text>
          </div>
          <div className="pgtextdiv">
            <img
              className='candid'
              src="https://image.wedmegood.com/resized/800X/uploads/project/136614/1620984757_S_A_Jodhpur_Umaid_Bhawan_Wedding_17.jpg"
            />
            <h4 className="topicstyle">Couple Entry</h4>
            <text className="pg">
            The Jaimala Ceremony is truly a symbol of love and strong bond. The best wedding planners are the connoisseurs of creativity and amazing ideas. It is said that wedding are made in heaven so, allow us to create heaven on earth for you.

            We have various types of Hydraulic & Revolving stages , Flower shower machines, different types of Palki, Doli and Chattar for bride & groom entry, royal soldiers, mashaal guys, welcome girls, pari Fairy for escorting bride & groom in Jai Mala, Reception or Ring Ceremony with various themes & stage setup.
            </text>
          </div>
          
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
            <img
              src="https://5.imimg.com/data5/RP/GK/VE/IOS-8162246/product-jpeg-500x500.png"
              className="candid"
            />
            <h4 className="topicstyle">Foreground Decoration</h4>
            <text className="pg">
            At Dream Planner, we understand that your wedding day is one of the most cherished moments of your life. Every detail, from the venue to the decor, plays a crucial role in creating the perfect ambiance for your special day. That's why we're thrilled to introduce our exquisite Pendle Decoration services, designed to transform your wedding into an unforgettable experience.
            </text>
          </div>
          <div className="pgtextdiv">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/project/32539/1528185524_IMG0176.jpg"
              className="candid"
            />
            <h4 className="topicstyle">Jaimala Stage</h4>
            <text className="pg">
            The Jaimala Ceremony is truly a symbol of love and strong bond. The best wedding planners are the connoisseurs of creativity and amazing ideas. It is said that wedding are made in heaven so, allow us to create heaven on earth for you.

            We have various types of Hydraulic & Revolving stages , Flower shower machines, different types of Palki, Doli and Chattar for bride & groom entry, royal soldiers, mashaal guys, welcome girls, pari Fairy for escorting bride & groom in Jai Mala, Reception or Ring Ceremony with various themes & stage setup.
            </text>
          </div>
          
        </div>
        <div className="pg3">
          <div className="pgtextdiv">
          <h4 className="topicstyle">Entrance Decor</h4>
          <h4 className="topicstyle">Cold Fire</h4>
          <h4 className="topicstyle">Ice Smoke</h4>
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
              <h4 className="pgalbum">Service Type</h4>
              <text className="pgalbumtext">
                <img
                src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                width='30.5rem'
                className="rupee"
                />
                Floral Decoration
              </text>
            </div>
            
            <div className="pricespec">
              <h4 className="pgalbum">Payment Term</h4>
              <text className="pgalbumtext">
                Booking Time : 50% <br/>
                Before one day of Event : 100% <br/>
                
              </text>
              
            </div>
            <div className="pricespec">
              <h4 className="pgalbum">Extra Service</h4>
              <text className="pgalbumtext">
                providing extra service   <br/>
                cost : 5% per hour of Booking Amount
                
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

export default decor