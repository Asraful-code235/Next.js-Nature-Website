import React from 'react';

const Homepage = () => {
  return (
    <div id="home" className="container  w-full h-full">
      {/* <div className=" w-full h-[40vh] bg-[url('/bg-app.jpeg')] bg-cover bg-no-repeat"></div> */}
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("/bg-app.jpeg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Summers are getting warmer and warmer. One great way to beat the
              heat is by strategically planting trees that are drought-tolerant
              and provide great shade.
            </p>
            <button className="btn btn-ghost btn-accent btn-outline">
              Get To know Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
