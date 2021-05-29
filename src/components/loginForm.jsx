import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { password: "", username: "" },
    errors: {},
  };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    const account = { ...this.state.account };
    account[name] = value;
    this.setState({ account });
  };
  validate = () => {
    return { username: "username is required" };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors });
    if (errors) return;
  };
  render() {
    const { username, password } = this.state.account;
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
