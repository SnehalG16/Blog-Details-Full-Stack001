import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [post, setPost] = useState([]); // Initialize posts as an empty array
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPost(response.data);
        } else {
          setError('Unexpected data format received from server.');
        }
      })
      .catch((err) => setError('Failed to load posts. Please try again.'));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!Array.isArray(post) || post.length === 0) {
    return <p>Loading posts...</p>; // Display loading message if posts are not yet fetched
  }

  return (
    <div>
      <h1>All Blog Posts</h1>
      {post.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>
            <strong>Author:</strong> {post.author}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
