const EventFestival = require('../model/EventFestival');

// Create event
exports.createEvent = async (req, res) => {
  try {
    const event = new EventFestival({
      title: req.body.title,
      date: req.body.date,
      long_description: req.body.long_description,
      highlights: req.body.highlights,
      hero_img: req.file?.path,
      admin: req.body.admin
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await EventFestival.find().populate('admin');
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update event
exports.updateEvent = async (req, res) => {
  try {
    const update = {
      title: req.body.title,
      date: req.body.date,
      long_description: req.body.long_description,
      highlights: req.body.highlights,
    };

    if (req.file) {
      update.hero_img = req.file.path;
    }

    const event = await EventFestival.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete event
exports.deleteEvent = async (req, res) => {
  try {
    await EventFestival.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
