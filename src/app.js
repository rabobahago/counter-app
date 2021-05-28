import Movies from "./components/movies";
import Customers from "./components/common/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";
const App = () => {
  return (
    <main className="container">
      <NavBar style={{ marginBottom: "50px" }} />
      <Switch>
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" to="Movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
};

export default App;
