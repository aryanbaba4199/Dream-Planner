import React, { useState } from "react";
import "./booking.css";
import { useAuth } from "../Authentication/authcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeddingBooking = () => {
  const [name, setName] = useState("");
  // const [useremail, setUseremail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFunctionType, setSelectedFunctionType] = useState("");
  const [services, setServices] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const [msg, setmsg] = useState("");

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
  ];

  const handleInputClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setAddress(`Latitude: ${latitude}, Longitude: ${longitude}`);
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

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
  const { useremail, isAuthenticated } = useAuth();
  const handleBook = async () => {
    toast("Booking In process...");

    setBookingConfirmed(true);
    let time = new Date().toISOString();
    let email = "";
    let status = "Processing...";
    let payment = "No Transaction Found";
    if (isAuthenticated) {
      email = useremail;
    }
    console.log(email);
    const bookingData = {
      name,
      email,
      address,
      mobile,
      selectedServices: services,
      msg,
      functionType,
      time,
      status,
      payment,
    };
    window.location.href = "orderstatus";

    try {
      // const response = await fetch("http://localhost:4000/api/bookings", {
      const response = await fetch(
        "https://dpapi-omega.vercel.app/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (response.ok) {
        console.log("Success");
        setBookingConfirmed(true);
      } else {
        setBookingConfirmed(true);
      }
    } catch (error) {
      console.error("Error:", error);
      console.log(error);
    }
  };

  return (
    <>
      <div className="blank"></div>
      <div className="wholepage">
        <div className="userdetail">
          <h2 className="usercontainer">Fill Details</h2>
        </div>
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
            <label>Location :</label>
            <input
              type="text"
              className="label"
              value={address}
              placeholder="Get Location"
              onClick={handleInputClick}
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
            What's your Budget ?
            <input
              type="text"
              value={msg}
              className="msgbox"
              onChange={(e) => setmsg(e.target.value)}
            />
          </label>
        </div>

        <div className="bookbtn">
          <h2 onClick={handleBook} className="bookbtnin">
            Book
          </h2>
        </div>
        <div className="line"></div>
        <div className="pg-bottom-holder">
          <div className="pricespec">
            <h4 className="pgalbum">Package</h4>
            <text className="pgalbumtext">
              Event Planning starts from______
              <img
                src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                width="30.5rem"
                className="rupee"
              />{" "}
              2 Lakh
            </text>
          </div>
          <div className="pricespec">
            <h4 className="pgalbum">TAX</h4>
            <text className="pgalbumtext">
              {/* <img
                  src="https://cdn-icons-png.flaticon.com/256/2769/2769454.png"
                  width="30.5rem"
                  className="rupee"
                /> */}
              GST Inclusive
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
              Booking Time : 10% <br />
              Before Execution : 80% <br />
              Before Event : 10%
            </text>
          </div>
          <div className="pricespec">
            <h4 className="pgalbum">Extra Service</h4>
            <text className="pgalbumtext">
              providing extra service <br />
              cost : 5% per hour of Booking Amount
            </text>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default WeddingBooking;
