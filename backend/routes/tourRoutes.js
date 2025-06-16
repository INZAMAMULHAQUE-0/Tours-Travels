const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');
const upload = require('../middleware/upload');

router.post(
  '/',
  upload.fields([
    { name: 'hero_img', maxCount: 1 },
    { name: 'gallery_images', maxCount: 10 }
  ]),
  tourController.createTour
);

router.get('/', tourController.getAllTours);

router.put(
  '/:id',
  upload.fields([
    { name: 'hero_img', maxCount: 1 },
    { name: 'gallery_images', maxCount: 10 }
  ]),
  tourController.updateTour
);

router.delete('/:id', tourController.deleteTour);

module.exports = router;
