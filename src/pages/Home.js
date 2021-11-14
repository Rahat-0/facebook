import React from "react";
import Navber from "../components/home/Navber";
import LeftAside from "../components/home/LeftAside";
import RightAside from "../components/home/RightAside";
import Center from "../components/home/Center";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalculator } from '@fortawesome/free-solid-svg-icons'
// import classes from "../assets/css/Home.module.css";

function Home() {
  return (
    <>
      <Navber />

      <div className={`border-solid pt-14 bg-black text-center`}>
        <LeftAside />
        <RightAside />
        <Center />
      </div>
    </>
  );
}

export default Home;
