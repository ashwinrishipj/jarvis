import React from "react";
import "./profileInfo.css";

export default function ProfileInfo() {
  const searchProfile = () => {
    alert("still in implementation:");
  };

  const validateSearch = (e) => {
    e.preventDefault();
    alert(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="col-lg-3 ml-4 card text-center bg-dark">
        <h2> Profile </h2>
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-md"
            placeholder="Search for messages or users..."
            aria-label="Search for messages or users..."
          />
          <div className="input-group-append">
            <button
              className="btn btn-md btn-ico btn-secondary btn-minimal"
              type="submit"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

        <div className="card-body card-bg mt-4 bg-white">
          <h5 className="card-title">Print Username here</h5>
          <p className="card-text">Bio</p>
        </div>

        <div className="card mt-4">
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-start text-left">
              Country: <span className="fa fa-flag  span-align"> </span>
              <br />
              enter contry here
            </li>
            <li className="list-group-item text-left">
              phone : <span className="fa fa-mobile fa-2x span-align"> </span>
              <br />
              enter phone number
            </li>
            <li className="list-group-item text-left">
              mailId:
              <span className="fa fa-envelope span-align"> </span>
              <br />
              enter mail Id
            </li>
            <li className="list-group-item text-left">
              Date Created:
              <span className="fa fa-calendar span-align "> </span>
              <br />
              enter Date created
            </li>
          </ul>
        </div>

        <div class="form-row mt-4 mb-4">
          <div class="col">
            <button
              type="button"
              class="btn btn-md btn-outline-primary btn-basic d-flex align-items-center mr-4"
            >
              Settings
              <span class="fa fa-gear ml-2"></span>
            </button>
          </div>

          <div class="col">
            <button
              type="button"
              class="btn btn-md btn-outline-danger btn-basic d-flex align-items-center ml-4"
            >
              Logout
              <span class="fa fa-sign-out ml-2"></span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
