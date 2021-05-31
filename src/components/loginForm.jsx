import Form from "./common/form";
import Joi from "joi-browser";
import Input from "./common/input";
class LoginForm extends Form {
  state = {
    data: { password: "", username: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //if (errors) return;
    console.log("Submitted");
  };
  render() {
    const { data, errors } = this.state;
    console.log(data, errors);
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}
export default LoginForm;
