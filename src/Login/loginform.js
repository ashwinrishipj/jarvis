import React from 'react';
import { IntlProvider } from 'react-intl';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      formErrors: { emailId: "", password: "" },
      formValid: false,
      changePage: false,
      emailId: "",
      password: "",
    };
  }
  validateField = (e) => {
    let fieldValidationErrors = this.state.formErrors;
    let validation = e.target.value;
    let fieldName = e.target.name;
    switch (fieldName) {
      case "emailId":
        validation = validation.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
        fieldValidationErrors.emailId = validation ? "" : " is invalid";
        break;
      case "password":
        validation = validation.length >= 6;
        fieldValidationErrors.password = validation ? "" : " is too short";
        break;
      default:
        break;
    }
  }
  onSubmitSignIn = () => {
    console.log('inside');
  }
  render() {
    return (
      <IntlProvider locale="en">
        <Container style={{ marginTop: "10%" }}>
        <Row className="justify-content-md-center">
        <img src="https://img.icons8.com/nolan/58/000000/gender-neutral-user.png"/>
        </Row>
        <Row className="justify-content-md-center" style={{Color:"#007bff !important"}}>
          <h4>Log In:</h4>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="7">
              <Form>
                <Form.Group name="emailID" onChange={this.validateField}>
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control type="email" placeholder="example@abc.com" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <Form.Group name="password" onChange={this.validateField}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmitSignIn}>
                  Submit
              </Button>
                <Button variant="primary" type="cancel" onClick={this.handleCloseModal}>
                  cancel
              </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </IntlProvider>
    )
  }
}
export default LoginForm;
