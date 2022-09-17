import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/signup" className="nav-link">
        Signup
      </Link>
    </nav>
  );
};

export default Navbar;
