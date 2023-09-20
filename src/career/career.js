import React, { useState } from 'react';
import './career.css'

const WeddingPlannerJobApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    mobile: '',
    email: '',
    linkedin: '',
    serviceCategory: '',
    resume: null,
    higherStudy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('linkedin', formData.linkedin);
    formDataToSend.append('serviceCategory', formData.serviceCategory);
    formDataToSend.append('resume', formData.resume);
    formDataToSend.append('higherStudy', formData.higherStudy);

    // Send formDataToSend to your backend for database storage
    try {
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Reset the form on success
        setFormData({
          name: '',
          city: '',
          mobile: '',
          email: '',
          linkedin: '',
          serviceCategory: '',
          resume: null,
          higherStudy: '',
        });
        alert('Application submitted successfully!');
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred while submitting the application.');
    }
  };


  return (
    <div className='wcarholder'>
      <h1 className='title'>Wedding Planner Job Application</h1>
      <form onSubmit={handleSubmit}>
        <div className='name'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='namer'>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className='namer'>
          <label>Mobile:</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className='namer' >
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='namer'>
          <label>LinkedIn Address:</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            required
          />
        </div>
        <div className='namer'>
          <label>Service Category:</label>
          <select
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select a service category</option>
            <option value="Event Planning">Event Planning</option>
            <option value="Venue Selection">Venue Selection</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className='namer'>
          <label>Resume:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            name="resume"
            onChange={handleFileChange}
            required
          />
        </div>
        
        
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default WeddingPlannerJobApplication;
