const BlogGallery = require('../model/BlogGallery');

// Create blog with image
exports.createBlog = async (req, res) => {
  try {
    const blog = new BlogGallery({
      picture: req.file.path,
      caption: req.body.caption,
      admin: req.body.admin
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogGallery.find().populate('admin');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const update = {
      caption: req.body.caption,
    };
    if (req.file) {
      update.picture = req.file.path;
    }
    const blog = await BlogGallery.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    await BlogGallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
