import React from "react";
import { nav } from "../Links";
import people from "../../data/people.json";
function PopupMessenger(props) {
  const [messenger] =props.action;
  const { threedot } = nav;
  
  return (
    <div
      className={`fixed justify-center md:w-96 p-3 mt-1 mr-3 ${messenger ? "block" : "hidden"}  rounded-b-lg bg-gray-900  text-white right-0 overflow-y-scroll`}
      style={{ height: "85vh" }}
    >
      {/* static active bar  */}
      <div className="text-left flex justify-between items-center rounded-lg">
        <div>
          <p className="text-white text-3xl font-bold">Messenger</p>
        </div>
        <div className="flex justify-between w-32">
          <img
            className="w-8 p-2 rounded-full hover:bg-gray-500"
            src={threedot}
            alt="threedot"
          />
          <img
            className="w-8 p-2 rounded-full hover:bg-gray-500"
            src={threedot}
            alt="threedot"
          />
          <img
            className="w-8 p-2 rounded-full hover:bg-gray-500"
            src={threedot}
            alt="threedot"
          />
          <img
            className="w-8 p-2 rounded-full hover:bg-gray-500"
            src={threedot}
            alt="threedot"
          />
        </div>
      </div>

      <div>
        <input
          className="rounded-3xl w-full h-9 bg-gray-700 p-2 outline-none text-white"
          type="search"
          placeholder="Search Facebook"
        />
      </div>

      {/* dynamic user active status component */}
      {people.map(({ avater, message, name, _id }) => (
        <div
          key={_id}
          className="text-left m-2 p-2 flex items-center rounded-lg hover:bg-gray-800"
        >
          <div className="relative">
            <img
              className="w-14 h-14 rounded-full mr-2"
              src={avater}
              alt="profile"
            />
            <div className="absolute bg-green-600 w-3 h-3 right-4 bottom-0 rounded-full"></div>
          </div>

          <div>
            <p>{name}</p>

            <p className="overflow-ellipsis overflow-hidden w-56 whitespace-nowrap text-sm">
              {message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopupMessenger;
