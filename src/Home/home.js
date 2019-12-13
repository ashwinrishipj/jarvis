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
      <div>
      <div className="container-fluid px-0">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
       </div>
        <div className="container" style={{marginLeft:"120px"}}>
          <section >
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
