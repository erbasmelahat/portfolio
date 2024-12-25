import React from "react";
import blender from "../assets/blender.png";
import csharp from "../assets/csharp.png";
import flutter from "../assets/flutter.png";
import react from "../assets/react.png";
import threejs from "../assets/threejs.png";

const Skills = () => {
  return (
    <div>
      <div className="border border-grey-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
        <h1 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
          My <br /> Tech <br /> Stack
        </h1>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={blender} alt="" width={100}/>
          <p className="mt-2">Blender</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={csharp} alt="" width={50}/>
          <p className="mt-2">C#</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={react} alt="" width={50}/>
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={flutter} alt="" />
          <p className="mt-2">Flutter</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={threejs} alt="" width={100}/>
          <p className="mt-2">Three.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
