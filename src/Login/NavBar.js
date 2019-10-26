import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import LoginForm from "./loginform";
import { withRouter,Route } from "react-router-dom";
import Parts from "../particles/Parts";

export const NavBar = () => {
  const [modal, setmodal] = useState(false);
  const [signup, setSignup] = useState(false);

  const triggerLogin = () => {
    setmodal(!modal);
  };

  const triggerSignup = () => {
    setSignup(!signup);
  };

  return (
    <div>
      <div className="container-fluid px-0 data">
        <div className="row">
          <nav className="navbar fixed-top navbar-expand-lg  py-md-2">
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
                <a className="nav-item nav-link active  text-white" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link  text-white" href="#">
                  Features
                </a>
                <a className="nav-item nav-link  text-white" href="#">
                  Pricing
                </a>
              </div>
            </div>
            {signup ? (
              <button
                className="btn btn-outline-danger button"
                type="button"
                onClick={triggerSignup}
              >
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                Home
              </button>
            ) : (
              <button
                className="btn btn-outline-danger button"
                type="button"
                onClick={triggerSignup}
              >
                SignUp
                <i
                  className="fa fa-arrow-right"
                  style={{ paddingLeft: "2px" }}
                  aria-hidden="true"
                ></i>
              </button>
            )}
          </nav>
        </div>
        {signup ? (
          <Route path='/' component={Parts} /> 
        ) : (
          <div className="row mx-md-n5">
            <div className="col px-md-5 marginalignments">
              <div className="h-100 align-items-center text-white">
                <div
                  className="col center aos-item"
                  data-aos="fade-right"
                  data-aos-duration="1400"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="10"
                  data-aos-offset="0"
                >
                  <h2 className="card-title">Welcome To Picsplay</h2>
                  <p className="card-text">
                    make community a better place to live in{" "}
                  </p>
                  <button
                    className="btn btn-outline-primary button"
                    type="button"
                    onClick={triggerLogin}
                  >
                    Login
                    <i className="fa fa-arrow-right" style={{marginLeft:"3px"}} aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ marginTop: "190px" }}>
              <div>
                {modal ? <LoginForm triggerLogin={triggerLogin} /> : ""}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter;
