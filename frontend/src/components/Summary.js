import React from 'react';

const Summary = ({ values, additionalQuestions }) => (
  <div className="summary">
    <h2>Summary</h2>
    <p><strong>Full Name:</strong> {values.fullName}</p>
    <p><strong>Email:</strong> {values.email}</p>
    <p><strong>Survey Topic:</strong> {values.surveyTopic}</p>
    
    {values.surveyTopic === 'Technology' && (
      <div>
        <p><strong>Favorite Programming Language:</strong> {values.favoriteLanguage}</p>
        <p><strong>Years of Experience:</strong> {values.yearsOfExperience}</p>
      </div>
    )}
    
    {values.surveyTopic === 'Health' && (
      <div>
        <p><strong>Exercise Frequency:</strong> {values.exerciseFrequency}</p>
        <p><strong>Diet Preference:</strong> {values.dietPreference}</p>
      </div>
    )}
    
    {values.surveyTopic === 'Education' && (
      <div>
        <p><strong>Highest Qualification:</strong> {values.highestQualification}</p>
        <p><strong>Field of Study:</strong> {values.fieldOfStudy}</p>
      </div>
    )}
    
    <p><strong>Feedback:</strong> {values.feedback}</p>
    
    {additionalQuestions.length > 0 && (
      <div>
        <h3>Additional Questions</h3>
        <ul>
          {additionalQuestions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default Summary;
