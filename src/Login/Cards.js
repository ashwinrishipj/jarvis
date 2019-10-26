import React from "react"
export class Cards extends React.Component{
  render(){
  return (
    <div id="particles-js">
    <div className="row">
    <div
      className="col-lg-4 pd-0"
      data-aos="fade-left"
      data-aos-duration="2300"
      data-aos-easing="ease-in-back"
      data-aos-delay="10"
    >
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={require("./images/image4.jpg")}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            “You don’t take a photograph. You ask quietly to borrow it.”
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-end">
    <div
      className="col-md-0"
      style={{ float: "right" }}
      data-aos="fade-right"
      data-aos-duration="2300"
      data-aos-easing="ease-in-back"
      data-aos-delay="10"
    >
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={require("./images/glass.jpg")}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            Taking an image, freezing a moment, reveals how rich reality
            truly is
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>)}
};

