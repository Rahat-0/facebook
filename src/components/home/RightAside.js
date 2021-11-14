import React from "react";
import { nav } from "../Links";

function RightAside() {
  const { rightSearch, rightVideo, threedot, avater } = nav;
  return (
    <div
      className="fixed w-3/12  px-1 mt-2  text-white right-0 overflow-y-scroll"
      style={{ height: "90vh" }}
    >
      <div className="text-left flex justify-between items-center m-2 p-2 rounded-lg">
        <div>
          <p className="text-gray-400">Contact</p>
        </div>
        <div className="flex justify-between w-24">
          <img className="w-4" src={rightVideo} alt="room" />
          <img className="w-4" src={rightSearch} alt="search" />
          <img className="w-4" src={threedot} alt="threedot" />
        </div>
      </div>

      <div className="text-left m-2 p-2 flex items-center rounded-lg hover:bg-gray-900">
        <img
          className="w-8 h-8 rounded-full relative mr-2"
          src={avater}
          alt="profile"
        />
        <div className="absolute bg-green-600 w-2 h-2 mx-6 mt-5 rounded-full"></div>
        <p>Rahat</p>
      </div>
    </div>
  );
}

export default RightAside;
