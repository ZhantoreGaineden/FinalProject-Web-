Gym & Fitness Management System
Overview
Gym & Fitness Management System is a full-stack web application that helps users manage
gym activities, workout plans, and personal fitness information. The system provides a responsive
frontend interface and a secure backend REST API connected to a MongoDB database, allowing
users to register, log in, manage profiles, and track workouts seamlessly.
Features
• User registration and login
• Profile management
• Workout plan creation and tracking
• Responsive frontend interface
• REST API integration
• Secure password storage (bcrypt)
• JWT authentication for protected routes
Tech Stack
Frontend:
• HTML5
• CSS3
• JavaScript (Vanilla JS)
Backend:
• Node.js
• Express.js
Database:
• MongoDB
Other Tools:
• dotenv (environment variables)
• bcrypt (password hashing)
• JWT (authentication)
• Git & GitHub
• Postman (API testing)
Project Structure:
root/
├─ backend/
│ ├─ server.js
│ ├─ package.json
│ ├─ .env
│ ├─ .env.example
│ └─ src/
│ ├─ controllers/
│ ├─ routes/
│ └─ models/
├─ frontend/
│ ├─ index.html
│ ├─ login.html
│ ├─ signup.html
│ ├─ profile.html
│ ├─ services.html
│ ├─ prices.html
│ ├─ trainers.html
│ ├─ diet.html
│ ├─ about.html
│ ├─ contacts.html
│ ├─ group.html
│ ├─ personal.html
│ ├─ style.css
│ ├─ script.js
│ └─ image/
└─ click.wav
Installation
1. Clone the repository
git clone https://github.com/your-username/gym-fitness-management.git
cd gym-fitness-management
2. Install backend dependencies
cd backend
npm install
3. Set up environment variables
• Create a .env file based on .env.example
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4. Start the server
node server.js
5. Open frontend pages
• Open frontend/index.html in your browser
API Endpoints
Authentication:
• POST /register – Register a new user
• POST /login – Log in and receive JWT token
Protected Routes:
• GET /profile – Access user profile (requires JWT token)
• POST /workouts – Create a new workout plan (requires JWT token)
(More routes available in backend/src/routes)
Screenshots:
1) Project Structure in VS Code – showing the separation of frontend and backend,
including .env files without secrets.
2) MongoDB Atlas – displaying the cluster and collections such as Users and Workouts.
3) Frontend Register & Login Pages
