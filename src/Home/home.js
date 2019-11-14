import React from "react";
import $ from "jquery";
import "./home.css";
import HomeNavbar from "./HomeNavbar";
import {
  withRouter,
  Switch,
  Route
} from "react-router-dom";

import UploadData from "./uploadStatus/UploadStatus";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadContent: null,
      Sidebar: false
    };
  }

  componentWillMount() {
    this.setState({ loadContent: "HomePage" });
  }

  componentDidMount = () => {
    $("#sidebar-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  };

  handleToggle = () => {
    this.setState({ Sidebar: !this.state.Sidebar });
  };

  handleCall = e => {
    e.preventDefault();
    this.setState({
      loadContent: e.target.name
    });
  };

  render() {
    return (
      <div id="wrapper">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <h2>Logo</h2>
          </div>
          <ul className="sidebar-nav">
            <li className="header">Navigation</li>
            <li>
              <a onClick={this.handleCall} href="null" name="HomePage">
                <i className="fa fa-home" aria-hidden="true"></i> Homepage
              </a>
            </li>
            <li>
              <a onClick={this.handleCall} href="null" name="PostData">
                <i className="fa fa-tachometer" aria-hidden="true"></i>{" "}
                Dashboard
              </a>
            </li>
            <li className="header">More</li>
            <li>
              <a onClick={this.handleCall} href="null" name="Friends">
                <i className="fa fa-users" aria-hidden="true"></i> Friends
              </a>
            </li>
            <li>
              <a onClick={this.handleCall} href="null" name="Settings">
                <i className="fa fa-cog" aria-hidden="true"></i> Settings
              </a>
            </li>
            <li>
              <a onClick={this.handleCall} href="null" name="Information">
                <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
                Information
              </a>
            </li>
            <li>
              <a onClick={this.handleCall} href="null" name="SignOut">
                <i className="fa fa-info-circle" aria-hidden="true"></i> SignOut
              </a>
            </li>
          </ul>
        </aside>
        <div className="container-fluid px-0">
          <div id="navbar-wrapper">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a
                    href="null"
                    className="navbar-brand"
                    id="sidebar-toggle"
                    onclick={this.handleToggle}
                  >
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <section id="content-wrapper">
            <div className="row">
              <div className="col-lg-12 px-0">
                <Switch>
                  {(this.state.loadContent === "HomePage" && (
                    <Route path="/" component={HomeNavbar} />
                  )) ||
                    (this.state.loadContent === "PostData" && (
                      <Route path="/" component={UploadData} />
                    )) ||
                    (this.state.loadContent === "Friends" && "") ||
                    (this.state.loadContent === "Settings" && "") ||
                    ""}
                </Switch>
                {(this.state.loadContent === "SignOut" &&
                  this.props.history.push("/")) ||
                  ""}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
