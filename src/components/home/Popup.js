import React from "react";
import PopupMessenger from "./PopupMessenger";
import PopupNotification from "./PopupNotification";
function Popup(props) {
  const [messenger,setmessenger, notification] = props.action;
  return (
    <>
      <PopupMessenger action={[messenger, setmessenger]} />
      <PopupNotification action={[notification]} />
    </>
  );
}

export default Popup;
