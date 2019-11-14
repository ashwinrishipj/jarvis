import React from "react";

export const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      className="contained-fluid"
      style={{ background: "#f7f7f7", Textcolor: "white", padding: " 60px 0" }}
    >
      <footer>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 footer-info"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h4 style={{ color: "#007bff" }}>Picsplay</h4>
            <p>
              A new community intended to provide one point of contact on over
              diversed topics of pictures with easy download.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <div className="social-links ">
              <a href="null" className="twitter anchor">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="null" className="facebook anchor">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="null" className="instagram anchor">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="null" className="google-plus anchor">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="null" className="linkedin anchor">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <h4 style={{ color: "#007bff" }}>Contact Us</h4>
            <p>
              Chennai <br />
              Tamil Nadu
              <br />
              india <br />
              <strong>Phone:</strong> +917708270904
              <br />
              <strong>Email:</strong> picsplaydevelopers@gmail.com
              <br />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
