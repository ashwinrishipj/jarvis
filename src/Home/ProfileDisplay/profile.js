import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "./profile.css";
import ProfileInfo from "./profileInfo";

/**
 * Function to display the profile details:
 *
 * @return { set of card from userprofile posted below:}
 *
 * @author Ashwin Rishi
 */

function Profile() {
  const [responsedata, setResponsedata] = useState("");

  const handleDeletePost = async (element_id) => {
    alert(element_id);
    console.log("elemend id :", element_id);

    const query = JSON.stringify({
      query: `mutation{
  deletePost(input:{userId:"5e9df7a7327a33165026b98f",postId: "${element_id}"})  {_id,ImageUrl,Width,Height,Likes,Textdata,PostCreatedOn}
}
`,
    });

    var response = await fetch("http://localhost:4000/graphql", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: query,
    });
    response = await response.json();
    console.log("response", response);
    alert(response);
    setResponsedata(response.data.deletePost);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchUserPosts = async () => {
      const query = JSON.stringify({
        query: `query{
          getUserPosts(userId:"5e9df7a7327a33165026b98f") {_id,ImageUrl,Width,Height,Likes,Textdata,PostCreatedOn}}`,
      });

      var response = await fetch("http://localhost:4000/graphql", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: query,
      });

      response = await response.json();
      console.log("response", response);
      setResponsedata(response.data.getUserPosts);
    };

    fetchUserPosts().then(() => {
      return signal;
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <div className="profilePageBackgroundColor">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <ProfileInfo />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="/posts">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-1">Image Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-2">Public Groups</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            {responsedata !== "" ? (
              <div className="card-columns mt-4">
                {responsedata.map((element, i) => {
                  var date = element.PostCreatedOn;
                  date = date.split("T")[0];
                  return (
                    <div
                      className="card w-100 bg-dark text-white"
                      border="info"
                      key={element._id}
                    >
                      <div className="card-body">
                        <h5 className="card-title">sample</h5>
                        <p className="card-text">{element.Textdata}</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">{date}</small>
                        <button
                          className="btn btn-sm btn-outline-danger float-right"
                          onClick={() => handleDeletePost(element._id)}
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
