import React from "react";
import "./home.css";
import HomeNavbar from "./HomeNavbar";
import { Link } from "react-router-dom";
import { withRouter, Switch, Route } from "react-router-dom";

import UploadData from "./uploadStatus/UploadStatus";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadContent: null,
      loadUserSettings: false,
      search: false,
      collapsed: false,
      profileSelected: false
    };
  }

  componentWillMount() {
    this.setState({ loadContent: "HomePage" });
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
    alert("clicked data");
  };

  handleSearch = () => {
    this.setState({ search: true });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  profileClick = () => {
    this.setState({ profileSelected: true });
  };
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? " collapse navbar-collapse show"
      : "collapse navbar-collapse";
    const classTwo = collapsed
      ? " navbar-toggler navbar-toggler-right"
      : "navbar-toggler navbar-toggler-right collapsed";
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
          <i
            className="pointer fa fa-user fa-2x text-white "
            onClick={this.profileClick}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {" "}
          </i>

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
            <ul className="navbar-nav mr-auto ml-4">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li>
                {this.state.search ? (
                  <form className="form-inline ml-2">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                ) : (
                  <div onClick={this.handleSearch}>
                    <i className="SearchIcon fa fa-fw fa-search pointer">
                      search
                    </i>{" "}
                  </div>
                )}
              </li>
            </ul>
            <a
              className="navbar-brand text-white mr-0"
              href
              onClick={this.handleCall}
            >
              PicsPlay
            </a>
          </div>
        </nav>

        <div className="container-fluid">
          <section>
            <div className="row">
            <div className="col-md-2">
              </div>
              <div className="col-lg-10">
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
