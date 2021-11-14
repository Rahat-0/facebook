import React from "react";
import { nav } from "../Links";

function Navber() {
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
  } = nav;
  return (
    <>
      <nav className="fixed flex w-full justify-between  p-2 bg-gray-900">
        <ul className="flex w-3/12  space-x-2">
          <li>
            <a className="" href="##">
              <img className="w-10" alt="fab" src={facebook}></img>
            </a>
          </li>
          <li>
            <input
              className="rounded-3xl w-11 bg-gray-700 p-2 outline-none text-white xl:w-56 h-11 xl:rounded-full"
              type="search"
              placeholder="Search Facebook"
            />
          </li>
        </ul>
        <ul className="lg:flex hidden w-6/12 justify-center items-center">
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
        <ul className="flex lg:w-3/12">
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
          <li className="w-12">
            <a href="##">
              <img
                className="w-9 h-9 p-2 rounded-full bg-gray-700"
                src={messenger}
                alt="fb"
              />
            </a>
          </li>
          <li className="w-12">
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
