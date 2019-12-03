import React from "react";

export class Cards extends React.Component {
  render() {
    return (
      <div className="container cardsText">
          <h4 data-aos="fade-up" data-aos-duration="2000">
            <b>Are you a person who Admire pictures?</b>
          </h4>
          <div style={{ width :"85%",color: "#5c666f"}}>
            <p data-aos="fade-up" data-aos-duration="3000">
              so what if there is a platform which provides all the pictures you
              want? while blogging at the same time. Our community helps people
              to get the most out of internet instead of getting pictures from
              each site.
            </p>

            <p data-aos="fade-up" data-aos-duration="3000">
              do this only provide pictures? def not!. you can post anything
              into our social media acceptiong our norms.
            </p>
          </div>
          <div
            className="row"
            data-aos="flip-left"
           
          >
            <div className="col-md-6">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("./images/image4.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text" style={{ color: "#5c666f" }}>
                    “You don’t take a photograph. You ask quietly to borrow it.”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 " style={{ float: "right" }}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("./grids/three.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text" style={{ color: "#5c666f" }}>
                    “You don’t take a photograph. You ask quietly to borrow it.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            data-aos="flip-left"
            style={{ marginTop: "20px" }}
          >
            <div className="col-lg-6" style={{ float: "right" }}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("./images/glass.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text" style={{ color: "#5c666f" }}>
                    Taking an image, freezing a moment, reveals how rich reality
                    truly is
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" style={{ float: "right" }}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={require("./grids/five.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text" style={{ color: "#5c666f" }}>
                    Taking an image, freezing a moment, reveals how rich reality
                    truly is
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
