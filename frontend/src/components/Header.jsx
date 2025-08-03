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
    </div>
  );
};

export default Header;