import React from "react";
import "./home.css";
import { withRouter, Switch, Redirect } from "react-router-dom";
import {
  Button,
  OverlayTrigger,
  Popover,
} from "../../node_modules/react-bootstrap";
import { Navigation } from "./pageNavigation";
import Search from "../helpers/search";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadContent: "home",
      loadUserSettings: false,
      collapsed: false,
      currentUser: true,
      profileSelected: true,
      searchedContent: "",
    };
  }

  handleSearch = (searchedContent) => {
    this.setState({ loadContent: "home", searchedContent: searchedContent });
  };

  handleCall = (e) => {
    e.preventDefault();
    this.setState({
      loadContent: e.target.name,
    });
  };

  handleUserSettings = () => {
    this.setState({
      loadUserSettings: true,
    });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleLogout = () => {
    localStorage.clear();
  };

  profileClick = (e) => {
    e.preventDefault();
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

    if (localStorage.getItem("userToken")) {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
            <a
              className="navbar-brand text-white mr-0"
              href="#home"
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
                    className="nav-link pointer fa fa-home"
                    name="home"
                    onClick={this.handleCall}
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item" name="blogs" onClick={this.handleCall}>
                  <a
                    className="nav-link pointer fa fa-newspaper-o "
                    name="blog"
                    href="#blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Search displayImages={(e) => this.handleSearch(e)} />
                </li>
              </ul>
              <OverlayTrigger
                trigger="click"
                key="bottom"
                rootCloseEvent="click"
                onHide="true"
                rootClose="true"
                placement="bottom"
                ref="overlay"
                overlay={
                  <Popover id={`popover-positioned-bottom`} title="username">
                    <Popover.Title as="h3">{`Popover bottom`}</Popover.Title>
                    <Popover.Content>
                      <div
                        className="list-group"
                        style={{ border: "none !important" }}
                        id="list-tab"
                        role="tablist"
                      >
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
                          <i className="fa fa-gear mr-2"></i>
                          settings
                        </a>
                        <a
                          className="list-group-item selectItem list-group-item-action"
                          tabIndex="3"
                          href="#list-settings"
                          name="signout"
                          onClick={this.handleLogout}
                        >
                          <i className="fa fa-sign-out mr-2"></i>
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
          {this.state.loadContent ? (
            <Navigation
              navigate={this.state.loadContent}
              searchedContent={this.state.searchedContent}
            />
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return (
        <Switch>
          <Redirect to="/" />
        </Switch>
      );
    }
  }
}

export default withRouter(Home);
