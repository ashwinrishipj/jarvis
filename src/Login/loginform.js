import React from "react";

import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailIdError: "",
      passwordError: "",
      formValidated: false,
      changePage: false,
      emailId: "",
      password: "",
      Credential: []
    };
  }

  validateField = e => {
    e.preventDefault();
    let validation = e.target.value;
    let fieldName = e.target.type;

    switch (fieldName) {
      case "email":
        if (
          validation.match(
            new RegExp(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i)
          )
        )
          this.setState({ emailIdError: "", emailId: validation });
        else this.setState({ emailIdError: "gmail is not valid" });
        break;
      case "password":
        if (
          validation.match(
            new RegExp(
              "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
            )
          )
        )
          this.setState({
            passwordError: "",
            password: validation,
            formValidated: true
          });
        else
          this.setState({
            passwordError:
              "The password must be 6 characters with one upper case and one number and one special characters "
          });
        break;
      default:
        break;
    }
  };

  onSubmitSignIn = e => {
    e.preventDefault();

    let requestBody = {
      query : ` query{
        ValidateUser(input:{
          emailId:"${this.state.emailId}",password :"${this.state.password}"
        }){
          userId,
          token,
          tokenExpiration
        }
      }
      `
    };

    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Accept' :'appliction/json',
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
       if (resData.data){
        console.log(resData);
         
          this.props.history.push("/home")
      }
      else{
        console.log("error:");
        alert(JSON.stringify(resData.errors[0].message));
      }
      })
      .catch(err => {
        console.log(err);
      });

  };

  componentDidMount = () => {
    if (this.state.changePage) {
      this.setState({ changePage: true });
    }
  };

  render() {
    return (
      <div>
        <div data-aos="zoom-in-down" data-aos-duration="380"
                data-aos-easing="ease-in-back">
          <div className="row">
            <form className="col-xs-4">
              <div className="form-group row " onChange={this.validateField}>
                <label className=" blue">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="abc@gmail.com"
                />
                <small className="form-text red">{this.state.emailIdError}</small>
              </div>
              <div className="form-group row" onChange={this.validateField}>
                <label className=" blue">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <small className="form-text red">{this.state.passwordError}</small>
              </div>
              <div className="form-check row red">
               
                <label className="form-check-label">Remember me</label>
                <input type="checkbox" className="form-check-input" />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-outline-primary button"
                  onClick={this.onSubmitSignIn}
                >
                  Submit
                </button>
                <button
                  onClick={this.props.triggerLogin}
                  className="btn btn-outline-secondary button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginForm);
