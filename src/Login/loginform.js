import React from "react";
import Parts from "../particles/Parts"
import { withRouter } from "react-router-dom";
import { FetchData } from "../fetch/Fetch";
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
      signup :false
    };
  }

  setAlert = contentText => {
    this.setState({ alert: true, content: contentText });
  };

  unsetAlert = ()=>{
    this.setState({alert:false})
  }
  triggerSignup =()=>{
    this.setState({signup:!this.state.signup});
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
          this.setState({
            emailIdError: "",
            emailId: validation,
            alert:false
          });
        else this.setAlert("gmail is not valid" )
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
            alert:false
          });
        else
          this.setAlert(
              "The password must be 6 characters with one upper case and one number and one special characters "
          )
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
      this.state.emailId !== "" && this.state.password !== ""
    ) {
      FetchData(requestBody).then(response => {
        return response === true
          ? this.props.history.push("/home")
          : this.setAlert(response);
      });
    } else {
      this.setAlert("please type valid emailId & password :")
    }
  };

  render() {
    return (
      <div> 
         <section className=" col-lg-11 negativeAlert px-0">
          {this.state.alert ? (
            <NegativeAlert
              changeAlert={this.unsetAlert}
              content={this.state.content}
            />
          ) : (
            ""
          )}
        </section>
        {this.state.signup ? <Parts triggerSignup={this.triggerSignup}/>:
        <div>
        <div
          data-aos="flip-left"
          
        >
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1" className="blue">
                Email address
              </label>
              <div className="col-lg-11 px-0">
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
              <div className="col-lg-11 px-0">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={this.validateField}
                />
              </div>
            </div>
            <div className="col-lg-11 px-0">
              <button
                type="button"
                className="btn btn-outline-primary btn-block button text-white"
                onClick={this.onSubmitSignIn}
              >
                Sign In
              </button>
            </div>
            <div
              className="modal-footer col-lg-11"
              style={{ marginTop: "15px" }}
            >
              <button type="button" className="btn btn-outline-warning button">
                forgot Password?
              </button>
              <button
                type="button"
                className="btn btn-outline-warning button "
                onClick={this.triggerSignup}
              >
                Register </button>
            </div>
          </form>
        </div>
        </div>
        }
      </div>
      
    );
  }
}
export default withRouter(LoginForm);
