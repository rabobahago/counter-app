import React, { Component } from "react";
class LoginForm extends Component {
  username = React.createRef();
  password = React.createRef();
  componentDidMount() {
    this.username.current.focus();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
  };
  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              id="username"
              type="text"
              className="control-form"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              autoFocus
              ref={this.password}
              id="password"
              type="password"
              className="control-form"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
