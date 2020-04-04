import React from "react";
import UploadData from "./uploadStatus/UploadStatus";
import "./home.css";
import { UnsplashImages } from "../helpers/unsplash";
import { Pixabay } from "../helpers/pixabay";

export default function HomePictures() {
  return (
    <div className="container">
      <UploadData />
      <UnsplashImages />
      <Pixabay/>
    </div>
  );
}
