import React from "react";
import UploadData from "./uploadStatus/UploadStatus";
import { ImageGrid } from "../helpers/ImageGrid";

export default function HomeNavbar() {
  return (
    <div className="container">
      <UploadData />
      <ImageGrid />
    </div>
  );
}
