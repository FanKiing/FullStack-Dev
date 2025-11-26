import { useDispatch, useSelector } from "react-redux";
import { AddLivre, Modifier } from "../features/LivreSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FormLivre=()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isbn} = useParams();

  const livreToEdit = useSelector((state) =>
    state.livre.find((item) => item.isbn ===isbn)
  );

  const [form, setForm] = useState({
    isbn: "",
    titre: "",
    auteur: "",
    prix: "",
  });

  useEffect(() => {
    if (livreToEdit) setForm(livreToEdit);
  }, [livreToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (livreToEdit) {
      dispatch(Modifier({ ...form }));
    } else {
      dispatch(AddLivre(form));
    }

    navigate("/");
  };

  return (
    <form className="card p-4 shadow" onSubmit={handleSubmit}>
      <h3>{livreToEdit ? "Modifier le livre" : "Ajouter un livre"}</h3>

      <div className="mb-3">
        <label>ISBN</label>
        <input
          name="isbn"
          className="form-control"
          value={form.isbn}
          onChange={handleChange}
          disabled={!!livreToEdit}
        />
      </div>

      <div className="mb-3">
        <label>Titre</label>
        <input
          name="titre"
          className="form-control"
          value={form.titre}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Auteur</label>
        <input
          name="auteur"
          className="form-control"
          value={form.auteur}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Prix</label>
        <input
          name="prix"
          type="number"
          className="form-control"
          value={form.prix}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary">
        {livreToEdit ? "Mettre à jour" : "Ajouter"}
      </button>
    </form>
  );
}

export default FormLivre;
