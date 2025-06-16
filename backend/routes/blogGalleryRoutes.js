const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogGalleryController');
const upload = require('../middleware/upload');

router.post('/', upload.single('picture'), blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.put('/:id', upload.single('picture'), blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
