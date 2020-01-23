import React from "react";
import RegisterUser from "../particles/Register";
import { withRouter } from "react-router-dom";
import { FetchData } from "../helpers/Fetch";
import NegativeAlert from "../Alerts/NegativeAlert";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailIdError: "",
      passwordError: "",
      emailId: "",
      password: "",
      alert: false,
      content: "",
      signup: false
    };
  }

  setAlert = contentText => {
    this.setState({ alert: true, content: contentText });
  };

  unsetAlert = () => {
    this.setState({ alert: false });
  };
  triggerSignup = () => {
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
            emailIdError: "",
            emailId: validation,
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
            passwordError: "",
            password: validation,
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

    if (
      this.state.emailIdError === "" &&
      this.state.passwordError === "" &&
      this.state.emailId !== "" &&
      this.state.password !== ""
    ) {
      FetchData(requestBody).then(response => {
        return response === true
          ? this.props.history.push("/home")
          : this.setAlert(response);
      });
    } else {
      this.setAlert("enter valid emailId & password :");
    }
  };

  render() {
    return (
      <div>
        {this.state.signup ? (
          <RegisterUser triggerSignup={this.triggerSignup} />
        ) : (
          <div>
            <aside className="col">
              <div className="row box">
                <i
                  className="fa fa-user"
                  style={{ fontSize: "200%" }}
                  aria-hidden="true"
                ></i>
              </div>
              <div className="card">
                <article className="card-body">
                  <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                  <hr />
                  <section className="col-lg-11 negativeAlert px-0">
                    {this.state.alert ? (
                      <NegativeAlert
                        changeAlert={this.unsetAlert}
                        content={this.state.content}
                      />
                    ) : (
                      ""
                    )}
                  </section>
                  <form>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            {" "}
                            <i className="fa fa-envelope fa-xs"></i>{" "}
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="EmailId"
                          type="email"
                          onChange={this.validateField}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            {" "}
                            <i className="fa fa-key fa-xs"></i>{" "}
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="******"
                          type="password"
                          onChange={this.validateField}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={this.onSubmitSignIn}
                      >
                        {" "}
                        Login{" "}
                      </button>
                    </div>
                    <p className="text-center">
                      <a href="#" className="btn">
                        Forgot password?
                      </a>
                    </p>
                  </form>
                </article>
              </div>
            </aside>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(LoginForm);
