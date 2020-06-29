import React, { useEffect, useState } from "react";
import { Card, CardColumns, Nav, Button, Badge } from "react-bootstrap";
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

  useEffect(() => {
    const fetchUserPosts = async () => {
      const query = JSON.stringify({
        query: `query{
        getUserPosts(userId:"5e9df7a7327a33165026b98f") {ImageUrl,Width,Height,Likes,Textdata}}`,
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

    fetchUserPosts();
  }, []);

  return (
    <div className="profilePageBackgroundColor">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="/posts">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-1">Account Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-2">Explore</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            {responsedata !== "" ? (
              <CardColumns className="mt-4">
                {responsedata.map((element, i) => {
                  return (
                    <Card
                      className="postsCard"
                      key={i}
                      style={{ width: "18rem" }}
                    >
                      <Card.Header className="postsCardHeader">
                        Header
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>{element.Likes}</Card.Title>
                        <Card.Text>{element.Textdata}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </CardColumns>
            ) : (
              ""
            )}
          </div>
          <div className="col-lg-4">
            <ProfileInfo />
            {/* <Card border="primary" className="profileCard" bg="dark">
              <Card.Header>Header</Card.Header>
              <Card.Body className="profileSubCards">
                <Button variant="outline-info">
                  <Badge pill variant="outline mt-1">
                    {" "}
                    <i className="fa fa-users fa-1x"> </i>
                  </Badge>
                  Profile views: 9
                </Button>
                <Button variant="outline-danger">
                  <Badge pill variant="outline mt-1">
                    {" "}
                    <i className="fa fa-heartbeat fa-1x"> </i>
                  </Badge>
                  Hearts Received: 9
                </Button>
                <Button variant="outline-primary">
                  <Badge pill variant="outline mt-1">
                    {" "}
                    <i className="fa fa-trophy"> </i>
                  </Badge>
                  Profile Ranking: 12
                </Button>
              </Card.Body>
            </Card> */}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
