import React from 'react';
import '../styles.css'; // Import the CSS file

const TechnologySection = ({ values, handleChange, errors }) => (
  <div>
    <div>
      <label>Favourite Programming Language</label>
      <select name="favoriteLanguage" value={values.favoriteLanguage} onChange={handleChange}>
        <option value="">Select</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C#">C#</option>
      </select>
      {errors.favoriteLanguage && <p>{errors.favoriteLanguage}</p>}
    </div>
    <div>
      <label>Years of Experience</label>
      <input type="number" name="yearsOfExperience" value={values.yearsOfExperience} onChange={handleChange} />
      {errors.yearsOfExperience && <p>{errors.yearsOfExperience}</p>}
    </div>
  </div>
);

export default TechnologySection;
