import React from "react";
import "../about/aboutcss/company.css";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "../Admin/feedback";

const Companytopic = ({ topic, topicDetail }) => (
  <div className="topicdiv">
    <h4 className="topicstyle">{topic}</h4>
    <text className="tdetail">{topicDetail}</text>
  </div>
);

const TopicList = () => {
  const topics = [
    {
      topic: "Who We Are:",
      topicDetail:
        "Dream Planner is India's premier wedding planning and event management company, specializing in curating unforgettable moments and seamless celebrations. With a passion for crafting extraordinary experiences, we have earned a stellar reputation as the go-to choice for couples and clients seeking top-tier event planning services.",
    },
    {
      topic: "Our Pan-India Presence:",
      topicDetail:
        "With a presence spanning every corner of the country, Dream Planner is a true Pan-India wedding planning powerhouse. From the bustling cities to serene countryside destinations, we bring the magic of celebrations to life, ensuring that no dream is too big or destination too remote. Our extensive network of trusted partners and vendors allows us to create stunning events in any location you desire.",
    },
    {
      topic: "Our Comprehensive Services:",
      topicDetail:
        "At Dream Planner, we understand that every wedding and event is unique. That's why we offer a wide array of services to cater to your specific needs:",
    },
    {
      topic: "Wedding Planning :",
      topicDetail:
        "Our dedicated team of experts will work closely with you to plan every aspect of your wedding, from venue selection and decor to catering and entertainment. We bring your vision to life while relieving you of the stress of planning.",
    },
    {
      topic: "Event Design & Decor :",
      topicDetail:
        "Our talented designers and decorators transform venues into enchanting spaces that captivate your guests. From floral arrangements to lighting and theme creation, we leave no detail untouched.",
    },
    {
      topic: "Entertainment & Photography :",
      topicDetail:
        "Elevate your event with captivating entertainment options and capture every cherished moment with our skilled photographers and videographers.",
    },
    {
      topic: "Experience :",
      topicDetail:
        "With years of experience, we have successfully orchestrated countless weddings and events, earning the trust of our clients.",
    },
    {
      topic: "Creativity :",
      topicDetail:
        "Our innovative and creative team constantly seeks fresh ideas to make your event stand out.",
    },
    {
      topic: "Professionalism :",
      topicDetail:
        "We are committed to professionalism in every aspect, from planning to execution.",
    },
  ];

  return (
      <div className="wholeco">
        
        <div className="company-info">
          <section className="info">
            <div className="dpinfo">
              <h2>Dream Planner</h2>
              <h5>Your Event Our Responsibilities</h5>
            </div>
          </section>
        </div>

        <div className="topicprovider">
          {topics.map((companyinfo, index) => (
            <Companytopic
              key={index}
              topic={companyinfo.topic}
              topicDetail={companyinfo.topicDetail}
            />
          ))}
        </div>
        <div className="topicprovider">
        <Nav.Link href="/feedback">
            Feedback
          </Nav.Link>
          
        </div>
      </div>
      
  );
};

export default TopicList;
