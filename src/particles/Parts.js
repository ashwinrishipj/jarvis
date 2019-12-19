import React from "react";
import NegativeAlert from "../Alerts/NegativeAlert";
import { FetchData } from "../helpers/Fetch";
import { withRouter } from "react-router-dom";

class Parts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      confirmPassword: "",
      Terms: "",
      error: "",
      Alert: false
    };
  }
  changeAlert = contentText => {
    this.setState({ Alert: !this.state.Alert, error: contentText });
  };

  onSubmitForm = e => {
    e.preventDefault();

    let requestBody = {
      query: `
        mutation{
          RegisterUser(input:{firstName:"${this.state.firstName}",lastName:"${this.state.lastName}",
          emailId:"${this.state.emailId}",password:"${this.state.password}"}){
            token,
            tokenExpiration
          }
        }
        `
    };
    if (
      this.state.error === "" &&
      this.state.firstName !== "" &&
        this.state.lastName !== "" &&
        this.state.emailId !== "" &&
        this.state.password !== "" &&
        this.state.confirmPassword !== ""
    ) {
      FetchData(requestBody).then(response => {
        return response === true
          ? this.props.history.push("/home")
          : this.changeAlert(response);
      });
    } else {
      this.setState({ Alert: true,error:"enter valid data:" });
    }
  };

  validateFields = e => {
    let type = e.target.name;
    let value = e.target.value;

    switch (type) {
      case "firstName":
        if (isNaN(value)) {
          this.setState({ [type]: value, Alert: false });
        } else {
          this.setState({
            error: "first name must be string",
            Alert: true
          });
        }
        break;
      case "lastName":
        if (isNaN(value)) {
          this.setState({ [type]: value, Alert: false });
        } else {
          this.setState({
            error: "last name must be string",
            Alert: true
          });
        }
        break;
      case "emailId":
        if (
          value.match(new RegExp(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i))
        ) {
          this.setState({ [type]: value, Alert: false });
        } else this.setState({ error: "gmail is not valid", Alert: true });
        break;
      case "password":
        if (
          value.match(
            new RegExp(
              "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
            )
          )
        ) {
          this.setState({ [type]: value, Alert: false });
        } else
          this.setState({
            error:
              "The password must be 6 characters with one upper case and one number and one special characters ",
            Alert: true
          });
        break;
      case "confirmPassword":
        if (this.state.password === value) {
          this.setState({ [type]: value, error: "", Alert: false });
        } else {
          this.setState({ error: "password does not match", Alert: true });
        }
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div
      data-aos="flip-right"
      className="centerSignup"
    >
        <form className="needs-validation blue" novalidate>
          <div className="negativeAlert">
            {this.state.Alert ? (
              <NegativeAlert
                content={this.state.error}
                changeAlert={() => this.changeAlert()}
              />
            ) : (
              ""
            )}
          </div>
          <div className="form-row">
            <div className="col-md-3 mb-3">
              <label for="validationCustom01">First name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First name"
                onChange={this.validateFields}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationCustom02">Last name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last name"
                onChange={this.validateFields}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="validationCustomUsername">Email ID:</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="fa fa-envelope icon"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="emailId"
                  placeholder="abcdefghi@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  onChange={this.validateFields}
                  required
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationCustom03">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="must have a digit and upper case"
                onChange={this.validateFields}
                required
              />
              <div class="invalid-feedback text-red">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="validationCustom03">Re-Type Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="match with the password:"
                onChange={this.validateFields}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback text-red">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-primary btn-block button"
            type="submit"
            onClick={this.onSubmitForm}
          >
            Signup
          </button>
          <div className="modal-footer" style={{ marginTop: "15px" }}>
            <button
              className="btn btn-outline-warning button"
              onClick={this.props.triggerSignup}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Parts);
