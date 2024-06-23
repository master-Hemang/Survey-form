import React from 'react';
import '../styles.css'; // Import the CSS file

const Feedback = ({ values, handleChange, errors }) => (
  <div>
    <div>
      <label>Feedback</label>
      <textarea name="feedback" value={values.feedback} onChange={handleChange} />
      {errors.feedback && <p>{errors.feedback}</p>}
    </div>
  </div>
);

export default Feedback;
