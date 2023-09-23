import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";


const ThankYou = () => (
  <div className="thank-you">
    <h2>Thanks for submitting feedback!</h2>
  </div>
);

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = () => {
    if (feedback === "showmetheadminpanel") {
      setSubmitted(true);
      navigate("/admin"); 
    } else {
      alert("Thanks for submitting feedback.");
    }
  };

  return (
    <>
      <div>
        <div className="wholeco">
          <h2>Dream Planner</h2>
        </div>
          <div>
            <h6>Enter Your Feedback</h6>
          </div>

        <div>
          {!submitted ? (
            <div className="feedback-form">
              <h2>Enter Your Feedback</h2>
              <input
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <h5 className="btnfbsubmit" onClick={handleSubmit}>
                Submit
              </h5>
            </div>
          ) : (
            <ThankYou />
          )}
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
