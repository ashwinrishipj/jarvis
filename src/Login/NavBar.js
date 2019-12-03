import React, { useState } from "react";
import "aos/dist/aos.css";
import LoginForm from "./loginform";
import { withRouter,Route } from "react-router-dom";
import Parts from "../particles/Parts";

export const NavBar = () => {
  const [modal, setmodal] = useState(false);
  const [home, setHome] = useState(false);
  const [alert, setAlert] = useState(false);

  const triggerLogin = (e) => {
    e.preventDefault();
    setmodal(!modal);
  };

  const triggerHome =(e)=>{
    setHome(!home)
  }

  const triggerAlert = () => {
    setAlert(!alert);
  };

  return (
      <div className="container-fluid px-0 data">
        <div className="row">
          <nav className="navbar fixed-top navbar-expand-lg">
            <i
              className="navbar-brand  text-white aos-item"
              data-aos="fade-right"
              data-aos-duration="3500"
            >
              PicsPlay
            </i>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse center"
              data-aos="fade-right"
              data-aos-duration="2500"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-item nav-link active  text-white" href="null">
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link  text-white" href="null">
                  Features
                </a>
                <a className="nav-item nav-link  text-white" href="null">
                  Pricing
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div class="row centerLogin">
        <div class="col-lg-3">
            <LoginForm/>
            </div>
          </div>
      </div>
  );
};

export default withRouter;
