import React, { useState } from "react";
import { nav } from "../Links";

function Navber(props) {
  const [toggle, setToggle] = useState(false)
  const [msg, setmsg] = useState(false)
  const [notify, setnotify] = useState(false)
  const [setlSide, setmessenger, setnotification] = props.action;
  setlSide(toggle)
  setmessenger(msg)
  setnotification(notify)
  const {
    home,
    account,
    menu,
    gaming,
    facebook,
    notification,
    messenger,
    marketPlace,
    user,
    groups,
    watch,
    bars,
  } = nav;
  return (
    <>
      <nav className="fixed flex w-full p-2 bg-gray-900">
        <ul className="flex md:space-x-2 w-5/12 lg:w-3/12  items-center">
          <li className="w-12">
            
              <img className="w-11 h-11" alt="fab" src={facebook}></img>
           
          </li> 
          <li>
            <input
              className="rounded-3xl w-11 bg-gray-700 p-2 outline-none text-white xl:w-56 h-11 xl:rounded-full"
              type="search"
              placeholder="Search Facebook"
            />
          </li>
          <li onClick={()=> setToggle(!toggle)} className="w-11">
            <a className="block md:hidden" href="##">
              <img className="w-11 h-11" alt="fab" src={bars}></img>
            </a>
          </li> 
        </ul>
        <ul className="lg:flex hidden justify-center lg:w-6/12 items-center">
          <li className="hover:bg-gray-800 px-9 rounded py-1">
            <a href="##">
              <img className="w-8 h-8" src={home} alt="fb" />
            </a>
          </li>
          <li className="hover:bg-gray-800 px-9 rounded py-1">
            <a href="##">
              <img className="w-8 h-8" src={watch} alt="fb" />
            </a>
          </li>
          <li className="hover:bg-gray-800 px-9 rounded py-1">
            <a href="##">
              <img className="w-8 h-8" src={marketPlace} alt="fb" />
            </a>
          </li>
          <li className="hover:bg-gray-800 px-9 rounded py-1">
            <a href="##">
              <img className="w-8 h-8" src={groups} alt="fb" />
            </a>
          </li>
          <li className="hover:bg-gray-800 px-9 rounded py-1">
            <a href="##">
              <img className="w-8 h-8" src={gaming} alt="fb" />
            </a>
          </li>
        </ul> 
        <ul className="flex items-center space-x-1 lg:w-3/12  w-7/12">
          <li className="w-28">
            <a
              className=" items-center justify-center text-white xl:flex hidden"
              href="##"
            >
              <img
                className="w-9 h-9 bg-gray-300 p-2 rounded-full "
                src={user}
                alt="fb"
              />
              <p className="pl-1">Rahat</p>
            </a>
          </li>
          <li className="w-12">
            <a href="##">
              <img
                className="w-9 h-9 p-2 rounded-full bg-gray-700"
                src={menu}
                alt="fb"
              />
            </a>
          </li>
          <li className="w-12" onClick={()=>setmsg(!msg , setnotify(false))}>
            <a href="##">
              <img
                className="w-9 h-9 p-2 rounded-full bg-gray-700"
                src={messenger}
                alt="fb"
              />
            </a>
          </li>
          <li className="w-12" onClick={()=>setnotify(!notify, setmsg(false))} >
            <a href="##">
              <img
                className="w-9 h-9 p-2 rounded-full bg-gray-700"
                src={notification}
                alt="fb"
              />
            </a>
          </li>
          <li className="w-12">
            <a href="##">
              <img
                className="w-9 h-9 p-2 rounded-full bg-gray-700"
                src={account}
                alt="fb"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navber;
