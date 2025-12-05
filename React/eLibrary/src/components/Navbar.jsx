import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((s) =>
    s.cart.items.reduce((n, i) => n + i.quantity, 0)
  );

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">eLibrary</Link>
        <div>
          <NavLink className="btn btn-outline-light me-2" to="/">Books</NavLink>
          <NavLink className="btn btn-primary" to="/cart">
            Cart ({count})
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
