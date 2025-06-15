const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const adminRoutes = require('./router/adminRouter');

dotenv.config(); // Load env vars

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());

// Routes
app.use('/api/admins', adminRoutes);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT || 5000, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
