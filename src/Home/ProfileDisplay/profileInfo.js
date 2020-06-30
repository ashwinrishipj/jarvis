import React from "react";
import "./profileInfo.css";
import { Card, Button, Badge } from "react-bootstrap";

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
      <div className="card text-center bg-dark mt-4">
        <h2> Profile </h2>
        <div className="input-group row ml-4 mr-4">
          <div className="form-row">
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                placeholder="search for profile settings"
                required
              />
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-sm btn-ico btn-secondary btn-minimal"
                type="submit"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card-body card-bg mt-4 ml-4 mr-4 bg-white">
          <h5 className="card-title">Print Username here</h5>
          <p className="card-text">Bio</p>
        </div>

        <div className="card mt-4 ml-4 mr-4">
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

        <div className="card mt-4 ml-4 mr-4">
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

        <div className="form-row mt-4 ml-4 mb-4">
          <div className="col">
            <button
              type="button"
              className="btn btn-sm btn-outline-primary btn-basic d-flex align-items-center mr-4"
            >
              Settings
              <span className="fa fa-gear ml-2"></span>
            </button>
          </div>

          <div className="col">
            <button
              type="button"
              className="btn btn-sm btn-outline-danger btn-basic d-flex align-items-center mr-3"
            >
              Logout
              <span className="fa fa-sign-out ml-2"></span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
