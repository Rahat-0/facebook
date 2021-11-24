import React, { useState } from "react";
import Navber from "../components/home/Navber";
import LeftAside from "../components/home/LeftAside";
import RightAside from "../components/home/RightAside";
import Center from "../components/home/Center";
import Popup from "../components/home/Popup";
// import PopupMessenger from "../components/home/PopupMessenger";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalculator } from '@fortawesome/free-solid-svg-icons'
// import classes from "../assets/css/Home.module.css";

function Home() {
  const [lSide, setlSide] = useState(null);
  const [messenger, setmessenger] = useState(false);
  const [notification, setnotification] = useState(false);
  return (
    <>
      <Navber action={[setlSide, setmessenger, setnotification]} />
      <div className={`border-solid pt-14 bg-black text-center`}>
        <LeftAside action={[lSide]} />
        <RightAside />

        <Popup action={[messenger, setmessenger, notification]} />
        <Center />
      </div>
    </>
  );
}

export default Home;
