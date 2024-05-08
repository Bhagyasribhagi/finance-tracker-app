import { Component, FormEvent, ChangeEvent } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errMsg: "",
    isError: false,
    passwordType: "password",
  };

  submitSuccess = (jwtToken: string) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    window.location.replace("/welcome");
  };
  submitFailure = (errMsg: string) => {
    this.setState({ errMsg, isError: true });
  };
  onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    console.log("helo");

    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log(response.ok);
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token);
    } else {
      this.submitFailure(data.error_msg);
    }
  };
  onClickCheckBox=(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.checked){
        this.setState({
            passwordType:"text"
        })
    }
    else{
        this.setState({
            passwordType:"password"
        })
    }
  }
  onChangeusername = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: e.target.value });
  };
  onChangepassword = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
    console.log("hello");
  };
  render() {
    const { username,passwordType,password, errMsg, isError } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    console.log("login");
    if (jwtToken !== undefined) {
      return <Navigate to="/login" />;
    }
    return (
      <div className="login-bg">
        <h1 className="login-heading">
          Personal Finance User <span className="span2"> Login Form</span>
        </h1>
        <form onSubmit={this.onSubmitForm} className="form-submit">
          <div className="bggg">
            <div className="name-lable">
              <label className="n-label">UserName : </label>
              <input
                type="text"
                value={username}
                className="name-input"
                onChange={this.onChangeusername}
              />
            </div>
            <div className="name-lable">
              <label className="n-label">Password : </label>
              <input
                type={`${passwordType}`}
                value={password}
                className="name-input"
                onChange={this.onChangepassword}
              />
            </div>
            <div className="show-pass">
              <input type="checkbox" id="showPsd" className="check-box" onChange={this.onClickCheckBox}/>
              <label className="show-password" htmlFor="showPsd">Show Password</label>
            </div>
            <br />
            <button type="submit" className="login-btn">
              Login
            </button>
            {isError ? <p className="errmsg">{`${errMsg}`}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
