import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Universal Character Manager
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/character-sheet" className="navbar-item">
              Character Sheet
            </Link>
            <Link to="/login" className="navbar-item">
              Login
            </Link>
            <Link to="/register" className="navbar-item">
              Register
            </Link>
            <Link to="/dashboard" className="navbar-item">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
