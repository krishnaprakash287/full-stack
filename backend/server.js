import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
const express = require('express');
const cors = require('cors');
const app = express();

const express = require('express');
const cors = require('cors');
const app = express();

// Define allowed origins based on environment
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://restaraunt-hyyt.onrender.com']
  : ['http://localhost:5173'];

// Configure CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Additional middleware (e.g., express.json())
app.use(express.json());

// Define your routes here
// For example: app.post('/api/reserve', (req, res) => { ... });

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
