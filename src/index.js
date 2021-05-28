import ReactDOM from "react-dom";
import "./Index.css";
import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
