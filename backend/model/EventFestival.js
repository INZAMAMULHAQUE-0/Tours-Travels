// models/EventFestival.js
const mongoose = require('mongoose');

const eventFestivalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  long_description: { type: String },
  hero_img: { type: String },
  highlights: { type: String },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
});

module.exports = mongoose.model('EventFestival', eventFestivalSchema);
