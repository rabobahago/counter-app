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
    const { password, username } = this.state.account;
    let errors = {};
    if (username.trim() === "") errors.username = "Username is required";
    if (password.trim() === "") errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });

    if (errors) return;
    console.log("submitted to the server");
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
