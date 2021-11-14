import React from "react";
import img from "../assets/images/fb-logo-static.svg";
// import classes from "../assets/css/forgotPassword.module.css";

function ForgotPassword() {
  return (
    <>
      <nav>
        <div className="flex justify-between">
          <ul>
            <li>
              <img className="w-36" src={img} alt="fb" />
            </li>
          </ul>
          <ul className="flex p-1">
            <li className="m-1">
              <input
                className="p-2 lg:block hidden rounded border outline-none focus:border-blue-500 "
                type="text"
                placeholder="Email or phone"
              />
            </li>
            <li className="m-1">
              <input
                className="p-2 lg:block hidden rounded border outline-none focus:border-blue-500 "
                type="password"
                placeholder="Password"
              />
            </li>
            <li className="m-1">
              <input
                className="p-2 rounded bg-blue-500 font-bold text-white"
                type="button"
                value="Login In"
              />
            </li>
            <li className="m-1 p-2 lg:block hidden">
              <a className="hover:underline text-blue-500" href="##">
                Forgotten account?
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div className=" bg-gray-200  flex justify-center items-center" style={{height: "70vh"}}>
          <div className="bg-white rounded-md p-3 ">
            <h1 className="p-3 font-bold text-xl">Find Your Account</h1>
            <hr></hr>
            <p className="p-3 text-lg">
              Please enter your email addresss or mobile number to <br></br>{" "}
              search for your account.
            </p>
            <div className="m-3">
              <input
                className="w-full p-3 border outline-none"
                type="text"
                placeholder="Mobile number"
              />
            </div>
            <hr></hr>
            <div className="flex justify-end ">
              <button className="px-4 py-1 rounded font-bold bg-gray-300 m-3">
                cancel
              </button>
              <button className="px-4 py-1 rounded font-bold bg-blue-500 m-3 text-white">
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
