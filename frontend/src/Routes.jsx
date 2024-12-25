import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './componments/BlogList';
import BlogForm from './componments/BlogForm';
import BlogDetails from './componments/BlogDetails';


const Rout = () => (

    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/create" element={<BlogForm />} />
      <Route path="/posts/:id" element={<BlogDetails />} />
    </Routes>

);

export default Rout;