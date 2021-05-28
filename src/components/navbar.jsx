import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Movies<span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/customers" class="nav-link">
              Customers
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/rentals" class="nav-link">
              Rentals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
