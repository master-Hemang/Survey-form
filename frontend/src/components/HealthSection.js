import React from 'react';
import '../styles.css'; // Import the CSS file

const HealthSection = ({ values, handleChange, errors }) => (
  <div>
    <div>
      <label>Exercise Frequency</label>
      <select name="exerciseFrequency" value={values.exerciseFrequency} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Rarely">Rarely</option>
      </select>
      {errors.exerciseFrequency && <p>{errors.exerciseFrequency}</p>}
    </div>
    <div>
      <label>Diet Preference</label>
      <select name="dietPreference" value={values.dietPreference} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
      </select>
      {errors.dietPreference && <p>{errors.dietPreference}</p>}
    </div>
  </div>
);

export default HealthSection;
