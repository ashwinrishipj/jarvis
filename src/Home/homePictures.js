import React from "react";
import UploadData from "./uploadStatus/UploadStatus";
import "./home.css";
import { UnsplashImages } from "../helpers/unsplash";
import { Pixabay } from "../helpers/pixabay";

class picturesDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
  return (
    <div className="container">
      <UploadData />
      <UnsplashImages searchString={this.props.search} />
      <Pixabay searchString={this.props.search} />
    </div>
  );
  }
};

export default picturesDisplay;
