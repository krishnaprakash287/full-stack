import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
const express = require('express');
const cors = require('cors');
const app = express();

// Define allowed origins
const allowedOrigins = [
  'http://localhost:5173',
  'https://restaraunt-hyyt.onrender.com',
];

// Configure CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies/auth headers if needed
}));

// Other middleware and routes
app.use(express.json());

// Define routes here
// For example: app.post('/api/reserve', (req, res) => { ... });

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
