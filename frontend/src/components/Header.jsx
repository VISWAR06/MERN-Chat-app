import React from 'react';

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center mt-20">
        <p className="text-3xl rounded-xl bg-gradient-to-tr from-white to-blue-400 
                      border-4 border-black px-6 py-3 shadow-lg">
          Integrated with AI
        </p>
      </div>
      <div className="flex justify-center mt-24 text-3xl">
        <h1>WRITE YOUR <span className="font-bold text-4xl text-blue-400">BLOG</span> IN <br/>
            <span className="flex justify-center">THIS PLATFORM</span>
        </h1>
      </div>
              <p className='flex justify-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt nihil numquam velit odio dolorem quia voluptates doloribus exercitationem reprehenderit reiciendis.</p>
 <div className="mt-8 flex justify-center">
        <div className="border-2 w-96 border-black flex items-center overflow-hidden shadow-lg">
          <input 
            type="text" 
            className="px-6 py-3 w-64 text-lg focus:outline-none" 
            placeholder="Search for blog"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 ml-10 font-medium transition-colors">
            Search
          </button>
        </div>
      </div>
      </div>
  );
};

export default Header;