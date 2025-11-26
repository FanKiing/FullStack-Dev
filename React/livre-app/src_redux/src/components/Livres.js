import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Livres = () => {
const livres = useSelector(state => state.livres);
  return (
        <div className="container mt-4">
      <h2>Liste des livres</h2>
      <div className="row">
        {livres.map(livre => (
          <div className="col-md-4" key={livre.isbn}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{livre.titre}</h5>
                <p>Auteur : {livre.auteur}</p>
                <Link className="btn btn-primary" to={`/details/${livre.isbn}`}>Détails</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Livres