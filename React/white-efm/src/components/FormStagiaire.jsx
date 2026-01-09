import React, { useEffect, useState } from "react";

const empty = { nom: "", prenom: "", ville: "", filiere: "", photo: "" };

export default function FormStagiaire({ initialValues, onSubmit, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    setForm(initialValues ? { ...empty, ...initialValues } : empty);
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.prenom.trim() || !form.filiere.trim()) return;
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form-stagiaire">
      <div>
        <label>Nom</label>
        <input name="nom" value={form.nom} onChange={handleChange} />
      </div>
      <div>
        <label>Prénom</label>
        <input name="prenom" value={form.prenom} onChange={handleChange} />
      </div>
      <div>
        <label>Ville</label>
        <input name="ville" value={form.ville} onChange={handleChange} />
      </div>
      <div>
        <label>Filière</label>
        <input name="filiere" value={form.filiere} onChange={handleChange} />
      </div>
      <div>
        <label>Photo (url/nom)</label>
        <input name="photo" value={form.photo} onChange={handleChange} />
      </div>

      <button type="submit">{initialValues ? "Modifier" : "Ajouter"} Stagiaire</button>
      {onCancel ? <button type="button" onClick={onCancel}>Annuler</button> : null}
    </form>
  );
}
