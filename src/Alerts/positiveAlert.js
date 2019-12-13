import React from "react";

export default function PositiveAlert(props) {
  setTimeout(() => {
    props.changeAlert();
  }, 4000);

  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>{props.content} </strong>
      <button
        type="button"
        className="close"
        onClick={props.changeAlert}
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
