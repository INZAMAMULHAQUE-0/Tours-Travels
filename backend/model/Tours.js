// models/Tour.js
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  location: { type: String },
  duration: { type: String },
  description: { type: String },
  price: { type: Number, min:0 },
  long_description: { type: String },
  hero_img: [{ type: String,default:[] }],
  includes: [{ type: String, default: [] }],
  excludes: [{ type: String, default: [] }],
  itinerary_days: [{ type: String, default: [] }],
  gallery_images: [{ type: String, default: [] }],
  category: { type: String },
  discount: { type: Number, max:100 },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
});

module.exports = mongoose.model('Tour', tourSchema);