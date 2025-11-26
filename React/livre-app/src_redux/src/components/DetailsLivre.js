import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { deleteLivre } from "../redux/livreActions";

const DetailsLivre = () => {
  const { isbn } = useParams();
  const dispatch = useDispatch();
  const livre = useSelector(state =>
    state.livres.find(item => item.isbn === isbn)
  );
  if (!livre) return <h2>Livre introuvable</h2>;
  return (
    <div className="container mt-4">
      <h2>{livre.titre}</h2>
      <p>Auteur : {livre.auteur}</p>
      <Link to={`/edit/${livre.isbn}`} className="btn btn-warning me-2">
        Modifier
      </Link>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(deleteLivre(isbn))}
      >
        Supprimer
      </button>
    </div>

  )
}

export default DetailsLivre