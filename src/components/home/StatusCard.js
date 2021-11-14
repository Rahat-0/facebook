import React from "react";
import { nav } from "../Links";

function StatusCard() {
  const { avater, image, video, feeling } = nav;
  return (
    <div className="text-left p-2 m-3 bg-gray-800 w-full sm:w-8/12 xl:w-4/12 rounded-lg">
      <div className="flex h-16 items-center p-2 space-x-2">
        <img className="h-10 w-10 rounded-full" src={avater} alt="rahat" />
        <input
          className="w-96 p-2 rounded-3xl outline-none bg-gray-700 hover:bg-gray-600"
          type="text"
          placeholder={`What's on your mind, Rahat ?`}
        />
      </div>
      <hr></hr>
      <div className="flex items-center justify-center">
        <div className="flex items-center text-gray-400  p-2 m-1 space-x-1 rounded-lg -500  hover:bg-gray-600">
          <img className="w-8 h-8" src={video} alt="live" />
          <p className="text-sm">Live Video</p>
        </div>

        <div className="flex items-center  text-gray-400 p-2 m-1 space-x-1 rounded-lg -500  hover:bg-gray-600">
          <img className="w-8 h-8" src={image} alt="live" />
          <p className="text-sm">Photo/video</p>
        </div>

        <div className="flex items-center p-2 m-1 space-x-1  text-gray-400 rounded-lg -500  hover:bg-gray-600">
          <img className="w-8 h-8" src={feeling} alt="live" />
          <p className="text-sm">Feeling/activity</p>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
