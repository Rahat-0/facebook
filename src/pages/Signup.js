import React from "react";
import img from "../assets/images/fb-logo-static.svg";
import classes from "../assets/css/signup.module.css";

function Signup() {
  return (
    <div className={classes.signupContainer}>
      <div className={classes.logoBody}>
        <img className={classes.logo} src={img} alt="fb" />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.formBody}>
          <h1 className="pt-3 font-bold text-2xl">Create a new account</h1>
          <p className="py-1">It's quick and easy</p>
          <hr></hr>
          <form className="p-3 flex flex-col">
            <div className="flex justify-between">
              <input
                className="p-1 border-2 m-2 w-1/2   rounded"
                type="text"
                placeholder="First name"
              />
              <input
                className="p-1 border-2 m-2 w-1/2 rounded"
                type="text"
                placeholder="Surname"
              />
            </div>
            <input
              className="p-1 border-2 m-2 rounded"
              type="text"
              placeholder="Mobile number or email address"
            />
            <input
              className="p-1 border-2 m-2 rounded"
              type="password"
              placeholder="New password"
            />
            <div className="flex flex-col text-left">
              <span className="mx-2">Date of birth</span>
              <div className="flex justify-between ">
                <select className="border-2 p-2 w-32 m-2 rounded">
                  <option>1</option>
                </select>
                <select className="border-2 p-2 w-32 m-2 rounded">
                  <option>january</option>
                </select>
                <select className="border-2 p-2 w-32 m-2 rounded">
                  <option>2000</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="mx-2">Gender</span>
              <div className="flex justify-between ">
                <div className="border-2 p-2 w-32 m-2 flex items-baseline justify-around  rounded">
                  <label for="female">Female</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                </div>
                <div className="border-2 p-2 w-32 m-2 flex items-baseline justify-around  rounded">
                  <label for="male">Male</label>
                  <input type="radio" id="male" name="gender" value="male" />
                </div>
                <div className="border-2 p-2 w-32 m-2 flex items-baseline justify-around  rounded">
                  <label for="custom">Custom</label>
                  <input
                    type="radio"
                    id="custom"
                    name="gender"
                    value="custom"
                  />
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-left m-2">
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
            <div>
              <button className="bg-green-800 text-white font-bold m-2 w-44 p-2 rounded-md  ">
                Sign Up
              </button>
            </div>
            <a className="text-blue-800" href="##">
              Already have an account?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
