import React from "react";
import img from "../assets/images/fb-logo-static.svg";
import classes from "../assets/css/login.module.css";

function Login() {
  return (
    <div className={classes.login}>
      <div className={classes.fbContainer}>
        <img className={classes.logo} src={img} alt="fb" />
        <h1 className={classes.h1}>
          Facebook helps you connect and share with people in your life.
        </h1>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.formBody}>
          <form className={classes.form}>
            <input type="text" placeholder="Email address or phone number" />
            <input type="password" placeholder="Password" />
            <input type="button" value="Log In" />
            <a href="##">Forgotten password?</a>
            <hr></hr>
          </form>

          <input type="button" value="Create New Account" />
        </div>
        <span className={classes.createPage}>
          <a href="##">Create a Page</a> for a celebrity, brand or business.
        </span>
      </div>
    </div>
  );
}

export default Login;
