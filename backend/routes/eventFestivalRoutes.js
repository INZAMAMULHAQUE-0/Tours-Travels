const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventFestivalController');
const upload = require('../middleware/upload');

router.post('/', upload.single('hero_img'), eventController.createEvent);
router.get('/', eventController.getAllEvents);
router.put('/:id', upload.single('hero_img'), eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
