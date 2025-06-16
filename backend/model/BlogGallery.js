// models/BlogGallery.js
const mongoose = require('mongoose');

const blogGallerySchema = new mongoose.Schema({
  picture: { type: String, required: true },
  caption: { type: String },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
});

module.exports = mongoose.model('BlogGallery', blogGallerySchema);
