import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog post ID from the route parameters
  const [post, setPost] = useState(null); // Holds the blog post details
  const [error, setError] = useState(null); // Holds the error state

  useEffect(() => {
    // Fetch the blog post by its ID
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((err) => setError('Failed to load the post. Please try again.'));
  }, [id]);

  // Show error if there's an issue loading the post
  if (error) {
    return <p>{error}</p>;
  }


  if (!post) {
    return <p>Loading post...</p>;
  }

  // Render the blog post details once fetched
  return (
    <div>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p>{post.content}</p>
      {post.tags && (
        <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
      )}
      <p><strong>Published Date:</strong> {new Date(post.publishedDate).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogDetails;
