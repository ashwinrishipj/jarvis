import React from "react";
import LoginForm from "./loginform";
import { withRouter } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="container-fluid p-0 site">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href=";false">
          Picsplay
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href=";false">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row page">
        <div className="col-md-4 mx-auto centerLogin">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default withRouter;
