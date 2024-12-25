import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, author, content, tags: tags.split(',') };
    axios.post('http://localhost:5000/posts', newPost)
      .then(response => console.log('Post Created:', response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
