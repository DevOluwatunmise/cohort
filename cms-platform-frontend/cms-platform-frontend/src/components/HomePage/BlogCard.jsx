import React from 'react';
import './BlogCard.css';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => (
  <div className="chelsea">
  <div className="ekuileo">
    <div className="blog-card">
      <Link to="https://smartmag.theme-sphere.com/coinbase/">
        <div className="baami">
          <img src={post.image} alt={post.title} className="image" />
          <h2 className="title">{post.title}</h2>
          <p className="text">Lorem ipsum dolor sit amet consectet adipisicing elit. Aliquid facilis beatae </p>
          <div className="text_card">
            <div className="eef">
              <p className="date">{post.date}</p>
            </div>
            <p className="author">{post.author}</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
  </div>

);

export default BlogCard;