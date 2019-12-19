import React from "react";
import "./home.css";
import HomeNavbar from "./HomeNavbar";
import { withRouter, Switch, Route } from "react-router-dom";
import {
  Button,
  OverlayTrigger,
  Popover
} from "../../node_modules/react-bootstrap";

import UploadData from "./uploadStatus/UploadStatus";
import LandingPage from "../Login/LandingPage";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadContent: "home",
      loadUserSettings: false,
      search: false,
      collapsed: false,
      currentUser:true,
      profileSelected: true};
  }

  handleCall = e => {
    e.preventDefault();
    this.setState({
      loadContent: e.target.name
    });
  };

  handleUserSettings = () => {
    this.setState({
      loadUserSettings: true
    });
  };

  handleSearch = () => {
    this.setState({ search: true });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleLogout =()=>{
   localStorage.clear();
  }

  profileClick = e => {
    e.preventDefault();
    this.refs.overlay.hide();
    this.setState({ profileSelected: false, loadContent: e.target.name });
  };

  handleNotifications = () => {
    alert("notified:");
  };

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? " collapse navbar-collapse show"
      : "collapse navbar-collapse";
    const classTwo = collapsed
      ? " navbar-toggler navbar-toggler-right ml-0"
      : "navbar-toggler navbar-toggler-right collapsed ml-4";

      if (localStorage.getItem("userToken")){ 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
          <a
            className="navbar-brand text-white mr-0"
            href
            onClick={this.handleCall}
          >
            PicsPlay
          </a>

          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link pointer"
                  name="home"
                  onClick={this.handleCall}
                  href
                >
                  <span className=" fa fa-home" aria-hidden="true"></span>
                  Home
                </a>
              </li>
              <li className="nav-item" name="blogs" onClick={this.handleCall}>
                <a className="nav-link pointer" href>
                  <span className="fa fa-newspaper-o" aria-hidden="true"></span>
                  Blog
                </a>
              </li>
              <li>
                {this.state.search ? (
                  <form className="form-inline ">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                ) : (
                  <li className="nav-item" name="blogs" onClick={this.handleSearch}>
                <a className="nav-link pointer" href>
                  <span className=" fa fa-fw fa-search pointer" aria-hidden="true"></span>
                  Search
                </a>
              </li>
                 
                )}
              </li>
            </ul>
            <OverlayTrigger
              trigger="click"
              key="bottom"
              rootCloseEvent="click"
              onHide="true"
              rootClose="true"
              placement="bottom"
              ref = 'overlay'
              overlay={
                <Popover id={`popover-positioned-bottom`} title="username">
                  <Popover.Title as="h3">{`Popover bottom`}</Popover.Title>
                  <Popover.Content>
                    <div className="list-group"style={{border:"none !important"}} id="list-tab" role="tablist">
                      <a
                        className="list-group-item selectItem list-group-item-action"
                        tabIndex="0"
                        href="#list-home"
                        name="profile"
                        onClick={this.profileClick}
                      >
                        <span
                          className=" fa fa-address-book-o mr-2"
                          aria-hidden="true"
                        ></span>
                        profile
                      </a>
                      <a
                        className="list-group-item selectItem list-group-item-action"
                        tabIndex="1"
                        href="#list-profile"
                        name="messages"
                        onClick={this.profileClick}
                      >
                        <span
                          className=" fa fa-envelope mr-2"
                          aria-hidden="true"
                        ></span>
                        messages
                      </a>
                      <a
                        className="list-group-item selectItem list-group-item-action"
                        tabIndex="2"
                        href="#list-messages"
                        onClick={this.profileClick}
                        name="settings"
                      >
                        <i class="fa fa-gear mr-2"></i>
                        settings
                      </a>
                      <a
                        className="list-group-item selectItem list-group-item-action"
                        tabIndex="3"
                        href="#list-settings"
                        name="signout"
                        onClick={this.handleLogout}
                      >
                        <i class="fa fa-sign-out mr-2"></i>
                        Logout
                      </a>
                    </div>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="outline-dark pointer text-white">
                <span className="fa fa-user fa-lg" aria-hidden="true"></span>
                <span
                  className="fa fa-caret-down fa-xs"
                  aria-hidden="true"
                ></span>
              </Button>
            </OverlayTrigger>
          </div>
        </nav>

        <div className="container-fluid">
          <section>
            <div className="row">
              <div className="col-md-2">
                <div className="row"></div>
                <div className="row  marginSpace"></div>
                <div className="row  marginSpace ">
                  <ul className="list-group">
                    <li
                      className="selectItem list-group-item d-flex justify-content-between align-items-center"
                      onClick={this.handleNotifications}
                    >
                      Cras justo odio
                      <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li
                      className="selectItem list-group-item d-flex justify-content-between align-items-center"
                      onClick={this.handleNotifications}
                    >
                      Dapibus ac facilisis in
                      <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li
                      className="selectItem list-group-item d-flex justify-content-between align-items-center"
                      onClick={this.handleNotifications}
                    >
                      Morbi leo risus
                      <span className="badge badge-primary badge-pill">1</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <Switch>
                  {(this.state.loadContent === "home" && (
                    <Route path="/" component={HomeNavbar} />
                  )) ||
                    (this.state.loadContent === "profile" && (
                      <Route path="/" component={UploadData} />
                    )) ||
                    (this.state.loadContent === "messages" && "") ||
                    (this.state.loadContent === "settings" && "") ||
                    ""}
                </Switch>
              </div>
            </div>
          </section>
        </div>
      </div>
    )}else {
      return(
      <Switch>
      <Route path="/" component={LandingPage} />
      </Switch>)
    }
}
}

export default withRouter(Home);
