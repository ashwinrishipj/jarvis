import React, { useState } from "react";
import "../Blog/blog.css";
import PositiveAlert from "../Alerts/positiveAlert";

export default function Blog() {
  const [textArea, setTextArea] = useState("");
  const [heading, setHeading] = useState("");
  const [positiveAlerts, setPositiveAlerts] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const publishData = () => {
    if (textArea !== "") {
    } else {
      setPositiveAlerts(true);
      setAlertMessage("please type something to publish:");
    }
  };

  const changeAlert = () => {
    setPositiveAlerts(false);
  };

  return (
    <div className="container">
      {positiveAlerts ? (
        <PositiveAlert content={alertMessage} changeAlert={changeAlert} />
      ) : (
        ""
      )}
      <div className="container">
        <div className="text-center">
          <input
            type="text"
            className="text-danger borderNone"
            placeholder="heading here"
            autoFocus="true"
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <hr className="lineStyle" />
        <div className="form-group">
          <textarea
            className="text-Area"
            rows="15"
            cols="100"
            placeholder="type your content here..."
            onChange={(e) => setTextArea(e.target.value)}
          ></textarea>
        </div>
        <div className="row justify-content-end ">
          <button
            type="button"
            className="btn btn-outline-warning mr-2 pointer "
          >
            clear All
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mr-4 pointer"
            onClick={publishData}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
