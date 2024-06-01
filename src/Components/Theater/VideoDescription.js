import React from "react";

const VideoDescription = () => {
  return (
    <div className="absolute top-1/3 flex flex-col w-1/3 pl-5 bg-gradient-to-br from-zinc-500 ">
      <h1 className="text-[2vw] font-bold text-white">KUNG FU PANDA</h1>
      <p className="text-[1vw] text-white">
        To everyone's surprise, including his own, Po, an overweight, clumsy
        panda, is chosen as protector of the Valley of Peace. His suitability
        will soon be tested as the valley's arch-enemy is on his way.
      </p>
      <div className="flex my-3 ">
        <button className="px-4 py-2  bg-gray-50 hover:bg-gray-500 bg-opacity-75 font-bold rounded-md">
          ▶ Play
        </button>
        <button className="px-4 py-2 ml-5  bg-gray-50  hover:bg-gray-500 bg-opacity-75 font-bold rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDescription;
