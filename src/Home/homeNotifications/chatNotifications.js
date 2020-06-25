import React, { useState } from "react";
import Toast from "../../../node_modules/react-bootstrap/Toast";
import "../home.css";

export function ChatNotifiactaions() {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  return (
    <div className="row ml-1 mt-4 sticky">
      <Toast show={show} onClose={toggleShow}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
}
