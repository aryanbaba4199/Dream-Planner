import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => (
  <div className="thank-you">
    <h2>Thanks for submitting feedback!</h2>
  </div>
);

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    if (feedback.trim() === "showmetheadminpanel") {
      setSubmitted(true);
      navigate("/admin");
    } else {
      alert("Thanks for submitting feedback.");
    }
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-header">Dream Planner</h2>
      <div className="feedback-intro">
        <h6>Enter Your Feedback</h6>
      </div>
      <div className="feedback-form">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button type="submit" className="btn-feedback-submit">
              Submit
            </button>
          </form>
        ) : (
          <ThankYou />
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
