import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "../Blog/blog";
import PicturesDisplay from "./homePictures";
import Profile from "./ProfileDisplay/profile";

export const Navigation = (props) => {
  return (
    <div className="container-fluid bg-dark ">
      <section>
        <Switch>
          {(props.navigate === "profile" && (
            <Route path="/" component={Profile} />
          )) ||
            (props.navigate === "home" && (
              <Route
                path="/"
                component={() => (
                  <PicturesDisplay searchedContent={props.searchedContent} />
                )}
              />
            )) ||
            (props.navigate === "messages" && "") ||
            (props.navigate === "messages" && "") ||
            (props.navigate === "settings" && "") ||
            (props.navigate === "blog" && (
              <Route path="/" component={Blog} />
            )) ||
            ""}
        </Switch>
      </section>
    </div>
  );
};
