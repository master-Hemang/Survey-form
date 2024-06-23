import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import validate from '../hooks/useValidation';
import TechnologySection from './TechnologySection';
import HealthSection from './HealthSection';
import EducationSection from './EducationSection';
import Feedback from './Feedback';
import Summary from './Summary';
import axios from 'axios';
import '../styles.css';

const Form = () => {
  const [values, handleChange] = useForm({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [summaryVisible, setSummaryVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.get(`http://localhost:5000/questions?topic=${values.surveyTopic}`);
        setAdditionalQuestions(response.data);
        setSummaryVisible(true);
      } catch (error) {
        console.error('Error fetching additional questions', error);
      }
    }
  };

  return (
    <div className="container">
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" name="fullName" value={values.fullName} onChange={handleChange} />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={values.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Survey Topic</label>
          <select name="surveyTopic" value={values.surveyTopic} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <p className="error">{errors.surveyTopic}</p>}
        </div>

        {values.surveyTopic === 'Technology' && <TechnologySection values={values} handleChange={handleChange} errors={errors} />}
        {values.surveyTopic === 'Health' && <HealthSection values={values} handleChange={handleChange} errors={errors} />}
        {values.surveyTopic === 'Education' && <EducationSection values={values} handleChange={handleChange} errors={errors} />}

        <Feedback values={values} handleChange={handleChange} errors={errors} />

        <button type="submit">Submit</button>
      </form>

      {summaryVisible && <Summary values={values} additionalQuestions={additionalQuestions} />}
    </div>
  );
};

export default Form;
