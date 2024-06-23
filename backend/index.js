const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 5000;

// Sample questions for each topic
const questions = {
  Technology: [
    "What is your preferred IDE?",
    "Do you contribute to open source projects?",
    "Which technology conferences do you attend?"
  ],
  Health: [
    "Do you track your fitness progress?",
    "How many hours of sleep do you get on average?",
    "Do you take any dietary supplements?"
  ],
  Education: [
    "Do you prefer online courses or in-person classes?",
    "What is your favorite educational resource?",
    "Have you ever attended a MOOC (Massive Open Online Course)?"
  ]
};

// Use the cors middleware
app.use(cors());

app.get('/questions', (req, res) => {
  const topic = req.query.topic;
  
  if (!topic || !questions[topic]) {
    return res.status(400).json({ error: 'Invalid or missing topic' });
  }

  res.json(questions[topic]);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
