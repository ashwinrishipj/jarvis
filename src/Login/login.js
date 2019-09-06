import React, { Component } from 'react'

import LoginForm from './loginform'
import { Button, Container, Row ,Col} from 'react-bootstrap';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import {Jumbotron} from 'react-bootstrap'

export default class login extends Component {

  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <Container >
          <Row>
            <Col lg="6"  style={{ marginTop:"10%" }}> 
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
            </Col>
            <Col lg="6">
              <LoginForm/>
              </Col>
          </Row>
        </Container>
        </>
    )
  }
}
