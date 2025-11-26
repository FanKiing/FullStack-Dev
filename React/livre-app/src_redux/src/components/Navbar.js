import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
   <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">Bibliothèque</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/add">Ajouter Livre</Link>
        </div>
      </div>
    </nav>

  )
}

export default Navbar