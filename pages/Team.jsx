import Image from 'next/image';
import React from 'react';

const Team = () => {
  return (
    <div id="team" className="flex flex-col items-center justify-center py-10">
      <h1 className="capitalize text-2xl lg:text-5xl font-bold text-slate-600 mb-28">
        Meet our team
      </h1>
      <div className="flex flex-wrap flex-col md:flex-row lg:flex-row items-center md:items-start  lg:items-start justify-center">
        <Image
          src={
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
          className=" rounded-md shadow-sm m-4"
          alt="team"
          width={300}
          height={400}
        />
        <div className="flex-[0.75] m-4 py-6  items-start justify-start">
          <p className="text-slate-500 font-medium text-lg ">
            Saving our planet from climate change is what led us to build this
            program. We will continue to improve this program in the near future
            .
          </p>
          <h3 className="font-medium mt-6 text-center md:text-start lg:text-start text-slate-600">
            Team leader
          </h3>
          {/* <h4>OurlittleProject.llc</h4> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
