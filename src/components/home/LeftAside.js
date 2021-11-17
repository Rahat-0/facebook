import React from "react";
import {nav} from '../Links'
import leftAside from '../../data/leftAside.json'
function LeftAside(props) {
  const [lSide]= props.action;
    const {avater} = nav;
  return (
    <div
      className={`w-3/12 px-1 mt-1 fixed text-white overflow-y-scroll ${lSide ? "block w-full bg-gray-800" : "hidden" } xl:block`}
      style={{ height: "90vh" }}
    >
        {/* dynamic user component */}
      <div className="text-left m-2 p-2 flex items-center rounded-lg hover:bg-gray-900">
          <img className="w-8 h-8 rounded-full mr-2" src={avater} alt="profile" />
          <p>Rahat</p>
      </div>  


      {/* static data from database */}
      {leftAside.map(({image, title})=>(
        <div key={new Date().setMilliseconds()} className="text-left m-2 p-2 flex items-center rounded-lg hover:bg-gray-900">
          <img className="w-8 h-8 rounded-full mr-2" src={image} alt="profile" />
          <p>{title}</p>
      </div>
      ))}
      
      
    </div>
  );
}

export default LeftAside;
