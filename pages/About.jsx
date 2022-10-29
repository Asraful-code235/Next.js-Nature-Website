import React from 'react';
import { GiBurningForest, GiPlantsAndAnimals } from 'react-icons/gi';
import { CgCodeClimate } from 'react-icons/cg';
import { BiCloudRain } from 'react-icons/bi';
const About = () => {
  return (
    <div id="about" className=" mt-24 mb-56 h-auto  ">
      <div className="grid place-items-center">
        <h1 className="flex text-center items-center tracking-wide pt-20  justify-center text-2xl lg:text-5xl capitalize font-bold text-slate-500  ">
          why plant <span className="text-green-500 mx-2"> trees </span>
        </h1>
        <div className="flex items-start justify-center flex-wrap w-full gap-10 mt-20">
          <div className="flex flex-col items-center   max-w-xs  h-auto bg-slate-100 rounded-sm p-4 ">
            <div className="p-4 rounded-full bg-red-400 border-none shadow-md mb-4 ">
              <GiBurningForest size={45} color="white" />
            </div>
            <p className="text-xl text-justify text-slate-500 ">
              Forest fire can be deadly, destroying homes, wildlife niche and
              timber, and contaminating the air with emigrations dangerous to
              mortal health.
            </p>
          </div>
          <div className="flex flex-col items-center bg-slate-100 rounded-sm p-4   max-w-xs  h-auto">
            <div className="p-4 rounded-full bg-blue-400 border-none shadow-md mb-4 ">
              <BiCloudRain size={45} color="white" />
            </div>
            <p className="text-xl text-justify text-slate-500 ">
              It can significantly slow the fire by raising the unburned fuels
              moisture content.
            </p>
          </div>
          <div className="flex flex-col bg-slate-100 rounded-sm p-4 items-center max-w-xs  h-auto">
            <div className="p-4 rounded-full bg-gray-400 border-none shadow-md mb-4 ">
              <CgCodeClimate size={45} color="white" />
            </div>
            <p className="text-xl text-justify text-slate-500 ">
              Forest fires can have lasted negative impacts on biodiversity and
              is especially dangerous in evergreen timbers.
            </p>
          </div>
          <div className="flex  flex-col bg-slate-100 rounded-sm p-4 items-center   max-w-xs  h-auto">
            <div className="p-4 rounded-full bg-green-400 border-none shadow-md mb-4 ">
              <GiPlantsAndAnimals size={45} color="white" />
            </div>
            <p className="text-xl text-justify text-slate-500 ">
              Animals can take refuge under trees without having to leave their
              food supply during periods of high heat or precipitation. Young
              trees can also serve as a source of food for animals, but they
              must be managed to allow for some growth before being completely
              consumed by wildlife
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
