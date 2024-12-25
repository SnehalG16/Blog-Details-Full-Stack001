const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  publishedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BlogPost', blogSchema);
