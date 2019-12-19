import React from "react";

export const Footer = () => {
  return (
    <div>
	
			<div className="container-fluid" style={{backgroundColor: "#1a212c"}}>
				<div className="row">
					
					<div data-aos="flip-left" data-aos-duration="600" className=" col-sm-12 col-md-4">
					  <h3 className="text-white"> Ashwin Rishi </h3>
					  <ul className="footerMyProfile">
					  <li>A full stack developer</li>
					  <li>Ex-Cerner Employee</li>
					  <li>VIT Graduate</li>
					  <li>
						<i className="fa fa-smile-o" style={{fontsize:"25px"}}></i>
					  </li>
					  </ul>
					</div>
					<div className="col-sm-12 col-md-4" data-aos="flip-left" data-aos-duration="1000">
					  <h3  style={{color:"white"}}>Get in Touch.</h3>
					  <ul className="social-nav-footer">
						<li>
						  <a href="mailto:pjashwinrishi@gmail.com" target={"_blank"}><i className="fa fa-envelope" aria-hidden="true"></i>
							  </a>
						</li>
			  
						<li>
						  <a href="https://github.com/ashwinrishipj" target={"_blank"}><i className="fa fa-github" aria-hidden="true"></i>
							  </a>
						</li>
			  
						<li>
						  <a href="https://www.linkedin.com/in/ashwinrishipj/"target={"_blank"}><i className="fa fa-linkedin" aria-hidden="true"></i>
							  </a>
						</li>
			  
						<li>
						  <a href="https://twitter.com/ashwinrishipj" target={"_blank"}><i className="fa fa-twitter" aria-hidden="true"></i>
							  </a>
						</li>
					  </ul>
					</div>

					<div className="col-sm-12 col-md-4" data-aos="flip-left" data-aos-duration="1500">
						<h3  style={{color: "whitesmoke"}}>My bloggings:</h3>
						
						  <div className="alert alert-outline-success my-card footerMyProfile" style={{bordercolor:"whitesmoke"}} onClick ="window.open('https://medium.com/@ashwinrishipj/javascript-the-fuzz-about-hoisting-variable-shadowing-and-closure-b8937bae349e')" target={"_blank"} >
							JavaScript — the fuzz about hoisting,variable shadowing and closure.
							<i className="fa fa-arrow-right" style={{marginleft:" 4px"}}></i>
						  </div>
						  <div className="alert alert-outline-danger my-card footerMyProfile" style={{bordercolor:"whitesmoke;" }}onClick= " window.open(' https://medium.com/@ashwinrishipj/html-and-css-the-fun-language-of-all-b4214db90fad')" target={"_blank"} >
							Html and css: the fun language of all.
							<i className="fa fa-arrow-right"></i>
						  </div>
						  
					</div>
				</div>
    </div>
    </div>
    
  );
};
