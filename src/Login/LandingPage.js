import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavBar } from "./NavBar";
import { Cards } from "./Cards";
import { ImageGrid } from "./ImageGrid";
import { Footer } from "./Footer";

export default class LandingPage extends React.Component {
  componentDidMount = () => {
    AOS.init({
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true,
      debounceDelay: 50
    });
  };

  render() {
    return (
      <React.Fragment className="site">
        <NavBar />
        <Cards />
        <ImageGrid />
        <Footer />
      </React.Fragment>
    );
  }
}
