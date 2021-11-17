import React from "react";
import { nav } from "../Links";
import people from "../../data/people.json"

function StoryCard() {

  const { avater} = nav;
  return (
    <div className="text-left mt-6 w-full sm:w-8/12 xl:w-5/12 rounded-lg flex space-x-2 overflow-x-hidden">
      {/* static story component here */}
      <div className="flex space-x-1">
        <div className="  w-28 h-52 bg-gray-800 rounded-xl">
          <div>
            <img className="h-40 mb-3 rounded-t-xl" src={avater} alt="card" />
          </div>
          <p className="text-center">Create Story</p>
        </div>
      </div>

      {/* dynamic story component here */}
      <div className="flex space-x-1">
      {people.map(({story, name })=>(
        <div className={`   w-28 h-52  bg-gray-400 rounded-xl ${ !story ? "hidden" : "block"} `}  >
        <div>
          <img className=" pt-6 h-40 w-full rounded-t-xl" src={story} alt="card" />
          <p className="text-center bg-transparent">{name}</p>
        </div>
      </div>
      ))}
      </div>
      
      
    </div>
  );
}

export default StoryCard;
