const BlogPost = require('../models/blog');

// Get all blog posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog posts.' });
  }
};

// Create a new blog post
exports.createPost = async (req, res) => {
  try {
    const newPost = new BlogPost(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create blog post.' });
  }
};

// Get a single blog post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found.' });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog post.' });
  }
};

// Update a blog post by ID
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPost) return res.status(404).json({ error: 'Post not found.' });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update blog post.' });
  }
};

// Delete a blog post by ID
exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ error: 'Post not found.' });
    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete blog post.' });
  }
};
