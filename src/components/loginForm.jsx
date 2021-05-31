import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { password: "", username: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validateProperty = ({ name, value }) => {
    let obj = { [name]: value };
    let schema = { [name]: this.schema[name] };
    let { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    const { name, value } = e.currentTarget;
    const account = { ...this.state.account };
    account[name] = value;
    this.setState({ account, errors });
  };
  validate = () => {
    const options = {
      abortEarly: false,
    };
    let { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    let errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
  };
  render() {
    const { account, errors } = this.state;
    console.log(account, errors);
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
          <button className="btn btn-primary" disabled={this.validate()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
