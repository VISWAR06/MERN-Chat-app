import React, { useState } from 'react';
import { blog_data } from '../QuickBlog-Assets/assets';
import Blogcard from './Blogcard';

const Bloglist = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = activeCategory === 'All' 
    ? blog_data 
    : blog_data.filter(blog => blog.category === activeCategory);

  const categories = ['All', ...new Set(blog_data.map(blog => blog.category))];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className='flex justify-center my-8'>
        <ul className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-400 hover:bg-blue-500 text-white'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <div key={blog._id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
            {blog.image && (
              <img 
                src={blog.image} 
                alt={blog.description || 'Blog image'} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}
            <div className="mt-4 flex-grow">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-3">
                {blog.category}
              </span>
              <p className="text-gray-700 line-clamp-3">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;