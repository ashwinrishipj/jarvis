import React from "react";
import "../home.css";

export const PostsNotifications = () => {
  const handleNotifications = () => {
    alert("notified");
  };

  return (
    <div className="row ml-1 mt-4 sticky">
      <ul className="list-group">
        <li
          className="selectItem list-group-item d-flex justify-content-between align-items-center"
          onClick={handleNotifications}
        >
          Cras justo odio
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li
          className="selectItem list-group-item d-flex justify-content-between align-items-center"
          onClick={handleNotifications}
        >
          Dapibus ac facilisis in
          <span className="badge badge-primary badge-pill">2</span>
        </li>
        <li
          className="selectItem list-group-item d-flex justify-content-between align-items-center"
          onClick={handleNotifications}
        >
          Morbi leo risus
          <span className="badge badge-primary badge-pill">1</span>
        </li>
      </ul>
    </div>
  );
};
