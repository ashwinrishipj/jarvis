import React from "react";

import { withRouter } from "react-router-dom";
import { FetchData } from "../fetch/Fetch";
import NegativeAlert from "../Alerts/NegativeAlert";
import Parts from "../particles/Parts";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailIdError: "",
      passwordError: "",
      changePage: false,
      signup: false,
      emailId: "",
      password: "",
      alert: false,
      content: ""
    };
  }

  setAlert = contentText => {
    this.setState({ alert: true, content: contentText });
  };

  changeAlert =()=>{
    this.setState({alert:false})
  }
  triggerSignUp = e => {
    this.setState({ signup: !this.state.signup });
  };

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
          this.setState({
            alert: false
          });
        else this.setAlert("gmail is not valid");
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
            alert: false
          });
        else
          this.setAlert(
            "The password must be 6 characters with one upper case and one number and one special characters "
          );
        break;
      default:
        break;
    }
  };

  onSubmitSignIn = () => {
    let requestBody = {
      query: ` query{
        ValidateUser(input:{
          emailId:"${this.state.emailId}",password :"${this.state.password}"
        }){
          token,
          tokenExpiration
        }
      }
      `
    };
    alert(JSON.stringify(this.state.content))
    if (this.state.content === "") {
      FetchData(requestBody).then(response => {
        return response === true
          ? this.props.history.push("/home")
          : this.setAlert(response);
      });
    } else {
      this.setAlert("type valid gmail & password:")
    }
  };

  componentDidMount = () => {
    if (this.state.changePage) {
      this.setState({ changePage: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.signup ? 
          <Parts triggerSignUp={this.triggerSignUp} />
         : 
          <div
            data-aos="zoom-in-down"
            data-aos-duration="380"
            data-aos-easing="ease-in-back"
          >
            <form>
            <div className="negativeAlert">
            
                {this.state.alert ? (
                  <NegativeAlert
                    changeAlert={this.changeAlert}
                    content={this.state.content}
                  />
                ) : (
                  ""
                )}
                
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1" className="blue">
                  Email address
                </label>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.validateField}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1" className="blue">
                  Password
                </label>
                <div>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={this.validateField}
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-block button"
                  onClick={this.onSubmitSignIn}
                >
                  Sign In
                </button>
              </div>
              <div className="modal-footer" style={{ marginTop: "15px" }}>
                <button
                  type="button"
                  className="btn btn-outline-warning button "
                >
                  forgot Password?
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning button "
                  onClick={this.triggerSignUp}
                >
                  Register{" "}
                </button>
              </div>
            </form>
          </div>
       
        }
      </div>
    );
  }
}
export default withRouter(LoginForm);
