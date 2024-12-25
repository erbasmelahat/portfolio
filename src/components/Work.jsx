import React from "react";
import blender from "../assets/blender.png";
import csharp from "../assets/csharp.png";
import flutter from "../assets/flutter.png";
import react from "../assets/react.png";
import threejs from "../assets/threejs.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]  rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={flutter} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-2 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]  rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={blender} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-2 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]  rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={csharp} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-2 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]  rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={react} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-2 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]  rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={threejs} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-2 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]  rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={flutter} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-2 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Work;
