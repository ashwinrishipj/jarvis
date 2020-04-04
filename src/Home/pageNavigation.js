import React from "react";
import {Switch, Route} from "react-router-dom"
import { PostsNotifications } from "./homeNotifications/userGroups";
import { ChatNotifiactaions } from "./homeNotifications/chatNotifications";
import HomePictures from "./homePictures";
import UploadData from "./uploadStatus/UploadStatus";
import Blog from "../Blog/blog";

export const Navigation =(props)=>{
    return (
    <div className="container-fluid">
            <section>
              <div className="row">
                <div className="col-md-2">
                  <PostsNotifications />
                  <ChatNotifiactaions />
                </div>
                <div className="col-lg-10 mt-4">
                  <Switch>
                    {(props.navigate === "home" && (
                      <Route path="/" component={HomePictures} />
                    )) ||
                      (props.navigate === "profile" && (
                        <Route path="/" component={UploadData} />
                      )) ||
                      (props.navigate === "messages" && "") ||
                      (props.navigate === "settings" && "") ||
                      (props.navigate === "blog" && (
                        <Route path="/" component={Blog} />
                      )) ||
                      ""}
                  </Switch>
                </div>
              </div>
            </section>
          </div>
        )
}