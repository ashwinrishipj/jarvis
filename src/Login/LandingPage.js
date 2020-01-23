import React from "react";
import { NavBar } from "./NavBar";
import { ImageGrid } from "./ImageGrid";
import { Footer } from "./Footer";

export default class LandingPage extends React.Component {

  render() {
    return (
      <React.Fragment className="site">
        <NavBar />
        <ImageGrid />
        <Footer />
      </React.Fragment>
    );
  }
}
