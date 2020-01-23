import React from "react";
import LoginForm from "./loginform";
import { withRouter } from "react-router-dom";
import { ImageGrid } from "./ImageGrid";

export const NavBar = () => {
  return (
    <div className="container-fluid p-0 site">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Picsplay
        </a>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              </li>
          </ul>
         
        </div>
      </nav>

      <div className="row page">
      <div className="col-lg-4 mx-auto centerLogin">
        <LoginForm />
          </div>
        <div className="col-lg-6">
          <ImageGrid/>
        </div>
      
        
      </div>
    </div>
  );
};

export default withRouter;
