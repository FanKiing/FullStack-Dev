import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Gestion des Livres</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Liste</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Ajouter</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
