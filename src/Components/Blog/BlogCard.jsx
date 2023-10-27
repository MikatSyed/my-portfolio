import React from 'react';
import "./BlogCard.css";
import { blogData } from "./data";

const BlogCard = () => {
  return (
    <div className='blog'>
      <div className="card-container">
        {
          blogData?.map((blog) => (
            <div className="card" key={blog?.id}>
              <div>
                <img
                  className="banner"
                  src={blog?.imageUrl}
                  alt={blog?.title}
                />
              </div>
              <div className="card-text">
                <div className="label">{blog?.category}</div>
                <h3>{blog?.title}</h3>
                <p>{blog?.description}</p>
              </div>
              <a href="#">Read more &rarr;</a>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BlogCard;
