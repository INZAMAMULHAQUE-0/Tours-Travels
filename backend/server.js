const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./db/connect');
dotenv.config(); 

const app = express();
const PORT = process.env.PORT;

app.use(cors())

// Middlewares
app.use(express.json());

// Routes
const adminRoutes = require('./routes/adminRoutes');
const blogRoutes = require('./routes/blogGalleryRoutes');
const eventRoutes = require('./routes/eventFestivalRoutes');
const tourRoutes = require('./routes/tourRoutes');

app.use('/api/admins', adminRoutes);
app.use('/api/blogs',blogRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tours', tourRoutes);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT || 5000, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
