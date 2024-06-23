# Survey-form

This project is a survey form website built using React on the frontend and a Node.js/Express backend for handling API requests. It allows users to fill out a survey based on different topics (Technology, Health, Education), with dynamically displayed sections and validation.

Features :
Dynamic form sections based on selected survey topic (Technology, Health, Education)
Validation for required fields and proper format (e.g., email validation)
Integration with an external API to fetch additional questions based on the selected survey topic
Clean and user-friendly interface with CSS styling for improved visual appeal

Technologies Used :
React.js
Node.js
Express
Axios
HTML/CSS


Installation
To run this project locally, follow these steps:

Prerequisites
Node.js installed on your machine
Clone the repository
bash
Copy code
git clone https://github.com/your-username/survey-form.git
cd survey-form
Install dependencies
Frontend (React)
bash
Copy code
cd client
npm install
Backend (Node.js/Express)
bash
Copy code
cd server
npm install
Start the backend server
Ensure the backend server is running on port 5000.

bash
Copy code
cd server
node index.js
Start the frontend development server
Open a new terminal and navigate to the client directory.

bash
Copy code
cd client
npm start
The frontend development server will start on port 3000 by default.

Accessing the Application
Open your web browser and go to http://localhost:3000 to view the survey form website.

Usage
Select a survey topic from the dropdown menu (Technology, Health, Education).
Fill out the form fields based on the selected topic.
Submit the form to see a summary of your responses and additional questions fetched from the API.
API Integration
The backend server uses an external API to fetch additional questions based on the selected survey topic. Ensure the backend server (index.js) is configured correctly to handle API requests and responses.
