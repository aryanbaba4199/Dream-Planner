import React, { useState } from "react";
import "./booking.css";





const WeddingBooking = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [services, setServices] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedFunctionType, setSelectedFunctionType] = useState("");
  const [msg , setmsg] = useState("");
  
  

  const functionType = [
    {
      fntype: "Wedding ( Bride )",
    },
    {
      fntype: "Wedding ( Groom )",
    },
    {
      fntype: "Pre-Wedding",
    },
    {
      fntype: "Post-Wedding",
    },
    {
      fntype: "Engagement Ceremony",
    },
    {
      fntype: "Birthday Celebration",
    },
  ];
  const availableServices = [
    {
      serviceName: "Event Planning",
    },
    {
      serviceName: "PhotoGraphy & VideoGraphy",
    },
    {
      serviceName: "Video Editing",
    },
    {
      serviceName: "Wedding Decorators",
    },
    {
      serviceName: "Wedding Venues",
    },
    {
      serviceName: "DJs",
    },
    {
      serviceName: "Wedding Cars",
    },
    {
      serviceName: "Bridal Makeup Artist",
    },
    {
      serviceName: "Mehndi Artist",
    },
    {
      serviceName: "Invitation Card",
    },
    {
      serviceName: "Choreographer",
    },
    {
      serviceName: "Artist Booking",
    },
    {
      serviceName: "Catering Service",
    },
    {
      serviceName: "Dancers",
    },
    {
      serviceName: "Honeymoon",
    },
    {
      serviceName: "Wedding Clothes",
    },

    // You can Select Deeply here

    // Your service data here
  ];

  const handleFunctionTypeChange = (event) => {
    setSelectedFunctionType(event.target.value);
  };

  const handleServiceChange = (event) => {
    const serviceName = event.target.value;
    if (event.target.checked) {
      setServices([...services, serviceName]);
    } else {
      setServices(services.filter((service) => service !== serviceName));
    }
  };

  const handleBook = async () => {
    // Prepare the data to send to your backend
    const bookingTimestamp = new Date().toISOString();
    const bookingData = {
      name,
      address,
      mobile,
      selectedServices: services,
      msg,
      functionType,
      bookingTimestamp,
      
    };
    console.log("Booking Data:", bookingData);

    try {
      // const response = await fetch("https://dpapi-omega.vercel.app/api/bookings", {
        const response = await fetch("http://localhost:4000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        console.log("Success");
        // Booking successful, you can set a state variable or show a confirmation message
        setBookingConfirmed(true);
        
      } else {
        // Handle errors, e.g., display an error message to the user
        console.error("Booking failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="blank"></div>
      <div className="wholepage">
        <h2 className="usercontainer">Fill Details</h2>
        <div className="userdiv">
          <div className="userdetail">
            <label>Name :</label>
            <input
              type="text"
              className="label"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="userdetail">
            <label>City :</label>
            <input
              type="text"
              className="label"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="userdetail">
            <label>Mobile No. :</label>
            <input
              type="text"
              className="label"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>

        <div className="bookingcontainer">
          <h3 className="serve">Select Your Function</h3>
          <div className="bookservices">
            {functionType.map((fn, index) => (
              <div className="servic" key={index}>
                <label className="checkbox">
                  <input
                    type="radio"
                    className="checktitle"
                    value={fn.fntype}
                    onChange={handleFunctionTypeChange}
                    checked={selectedFunctionType === fn.fntype}
                  />
                  {fn.fntype}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bookingcontainer">
          <h3 className="serve">Mark Your Need</h3>
          <div className="bookservices">
            {availableServices.map((service, index) => (
              <div className="servic" key={index}>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checktitle"
                    value={service.serviceName}
                    onChange={handleServiceChange}
                    checked={services.includes(service.serviceName)}
                  />
                  {service.serviceName}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className=""></div>

        <div className="msg-holder">
          <label className="msgtitle">
            Explain Your Function
            <input type="text" value={msg} className="msgbox" onChange={(e)=>setmsg(e.target.value)} >
            </input>

          </label>
        </div>

        <div className="bookbtn">
          <h2 onClick={handleBook} className="bookbtnin">
            Book
            {bookingConfirmed && (
          <p className="cnfmsg">
            Booking in process. Our planner will contact you soon.
          </p>
        )}
          </h2>
        </div>
        
      </div>
    </>
  );
};

export default WeddingBooking;
