import React from "react";
import { nav } from "../Links";

function StoryCard() {
  const { avater } = nav;
  const m = [1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="text-left m-3  w-5/12 rounded-lg flex space-x-2 overflow-x-hidden">
      <div className="flex space-x-1">
        {m.map(() => (
          <div className="  w-28 h-52 bg-gray-800 rounded-xl">
            <div>
              <img className="h-40 mb-3 rounded-t-xl" src={avater} alt="card" />
            </div>
            <p className="text-center">Create Story</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryCard;
