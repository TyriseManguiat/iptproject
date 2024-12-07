import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getSession } from './sessionhelper';

function FeedbackForm() {
  const [age, setAge] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [remarks, setRemarks] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const { username, email } = getSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/feedback', {
        username,
        email,
        age,
        feedbackType,
        remarks,
      });

      setSuccessMessage("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="box2">
      {email ? (
        <p>From: <strong>{email}</strong></p>
      ) : (
        <p>Error: Email not found in session.</p>
      )}

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="email" value={email} />

        <div className="dropdown-container">
          <div className="main">
            <div className="name">AGE</div><br />
            <select name="age" value={age} onChange={(e) => setAge(e.target.value)} required>
              <option value="below 18">Below 18</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45-54">45-54</option>
              <option value="55-64">55-64</option>
              <option value="65 and Above">65 and Above</option>
            </select>
          </div>
          <div className="main">
            <div className="name">FEEDBACK TYPE</div><br />
            <select name="feedback_type" value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)} required>
              <option value="Suggestion">Suggestion</option>
              <option value="Bug">Bug</option>
              <option value="General">General</option>
            </select>
          </div>
        </div>
        <br /><br />

        <textarea name="Remarks" placeholder="Tell us more..." value={remarks} onChange={(e) => setRemarks(e.target.value)} required></textarea><br /><br />

        <div className="button-container">
          <button type="submit" className="submit-button">Submit</button>
        </div>

        {successMessage && <p style={{ color: '#1F509A', fontSize: '18px' }}>{successMessage}</p>}
      </form>
    </div>
  );
}

export default FeedbackForm;
