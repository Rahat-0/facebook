import React, { useState } from "react";
import Navber from "../components/home/Navber";
import LeftAside from "../components/home/LeftAside";
import RightAside from "../components/home/RightAside";
import Center from "../components/home/Center";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalculator } from '@fortawesome/free-solid-svg-icons'
// import classes from "../assets/css/Home.module.css";

function Home() {
  const [lSide, setlSide] = useState(null)
  return (
    <>
      <Navber action={[lSide, setlSide]} />
      <div className={`border-solid pt-14 bg-black text-center`}>
        <LeftAside action={[lSide, setlSide]} />
        <RightAside />
        <Center />
      </div>
    </>
  );
}

export default Home;
