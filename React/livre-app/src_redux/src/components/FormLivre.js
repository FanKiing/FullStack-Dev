import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addLivre, updateLivre } from "../redux/livreActions";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const FormLivre = () => {
    const { isbn } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const livreToEdit = useSelector(state =>
    state.livres.find(item => item.isbn === isbn)
  );

  const [livre, setLivre] = useState(
    livreToEdit || { isbn: "", titre: "", auteur: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (livreToEdit) {
      dispatch(updateLivre(livre));
    } else {
      dispatch(addLivre(livre));
    }

    navigate("/");
  };


  return (
       <div className="container mt-4">
      <h2>{livreToEdit ? "Modifier Livre" : "Ajouter Livre"}</h2>

      <form onSubmit={handleSubmit}>
        
        <input
          className="form-control mb-3"
          type="text"
          placeholder="ISBN"
          value={livre.isbn}
          onChange={(e) => setLivre({ ...livre, isbn: e.target.value })}
          disabled={!!livreToEdit}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Titre"
          value={livre.titre}
          onChange={(e) => setLivre({ ...livre, titre: e.target.value })}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Auteur"
          value={livre.auteur}
          onChange={(e) => setLivre({ ...livre, auteur: e.target.value })}
        />

        <button className="btn btn-success" type="submit">
          {livreToEdit ? "Modifier" : "Ajouter"}
        </button>
      </form>
    </div>

  )
}

export default FormLivre