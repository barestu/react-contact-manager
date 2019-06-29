const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongooseDB
connectDB();

// Initialize middlewares
app.use(express.json({ extended: false }));

// Define API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/users', require('./routes/users'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
