const Tour = require('../model/Tours');

// Create tour with images
exports.createTour = async (req, res) => {
  try {
    const tour = new Tour({
      ...req.body,
      hero_img: req.files['hero_img']?.[0]?.path,
      gallery_images: req.files['gallery_images']?.map(file => file.path),
      admin: req.body.admin
    });
    await tour.save();
    res.status(201).json(tour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all tours
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find().populate('admin');
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update tour
exports.updateTour = async (req, res) => {
  try {
    const update = {
      ...req.body,
    };

    if (req.files['hero_img']) {
      update.hero_img = req.files['hero_img'][0].path;
    }

    if (req.files['gallery_images']) {
      update.gallery_images = req.files['gallery_images'].map(file => file.path);
    }

    const tour = await Tour.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(tour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete tour
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tour deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
