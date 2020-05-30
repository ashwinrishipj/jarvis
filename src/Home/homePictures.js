import React, { useState } from "react";
import UploadData from "./uploadStatus/UploadStatus";
import "./home.css";
import { Pixabay } from "../helpers/pixabay";
import { UnSplash } from "../helpers/unsplash";
import { PostsNotifications } from "./homeNotifications/userGroups";
import { ChatNotifiactaions } from "./homeNotifications/chatNotifications";

function PicturesDisplay(props) {
  var displayPictures;
  if (props.searchedContent !== "") {
    displayPictures = true;
    var searchContent = props.searchedContent;
  } else {
    displayPictures = false;
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 ml-0">
          <PostsNotifications />
          <ChatNotifiactaions />
        </div>

        <div className="col-lg-10 mt-4">
          <UploadData />
          {displayPictures ? (
            <div>
              <UnSplash searchString={searchContent} />
              <Pixabay searchString={searchContent} />
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
}

export default PicturesDisplay;
