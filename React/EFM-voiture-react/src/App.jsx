import React, { useState } from "react";

const stagiairesInit = [
  { id: 1, matricule: 1454, nom: "Alaoui",   codepostal: 20400, ville: "casa",  moyenne: 12.56 },
  { id: 2, matricule: 1455, nom: "Mansouri", codepostal: 20400, ville: "casa",  moyenne: 14.67 },
  { id: 3, matricule: 3454, nom: "Randani",  codepostal: 10400, ville: "rabat", moyenne: 11.45 },
];

function App() {

  const [stagiaires, setStagiaires] = useState(stagiairesInit);


  const [form, setForm] = useState({
    id: "",
    matricule: "",
    nom: "",
    ville: "",
    codepostal: "",
    moyenne: "",
  });


  const [stagiaires2, setStagiaires2] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleAdd = () => {
    const { matricule, nom, ville, codepostal, moyenne } = form;

    if (!matricule || !nom || !ville || !codepostal || moyenne === "") {
      alert("Tous les champs sont obligatoires");
      return;
    }

    const moy = parseFloat(moyenne);
    if (isNaN(moy) || moy < 0 || moy > 20) {
      alert("La moyenne doit être comprise entre 0 et 20");
      return;
    }

    const matNum = Number(matricule);
    if (stagiaires.some((s) => s.matricule === matNum)) {
      alert("Le matricule doit être unique");
      return;
    }

    const newId =
      stagiaires.length === 0
        ? 1
        : Math.max(...stagiaires.map((s) => s.id)) + 1;

    const newStagiaire = {
      id: newId,
      matricule: matNum,
      nom,
      ville,
      codepostal: Number(codepostal),
      moyenne: moy,
    };

    setStagiaires([...stagiaires, newStagiaire]);

    setForm({
      id: newId,
      matricule: "",
      nom: "",
      ville: "",
      codepostal: "",
      moyenne: "",
    });
  };

  const handleDelete = (id) => {
    setStagiaires(stagiaires.filter((s) => s.id !== id));
  };

  const handleEdit = (stagiaire) => {
    setForm({
      id: stagiaire.id,
      matricule: stagiaire.matricule,
      nom: stagiaire.nom,
      ville: stagiaire.ville,
      codepostal: stagiaire.codepostal,
      moyenne: stagiaire.moyenne,
    });
  };

  const handleVider = () => {
    setForm((f) => ({
      ...f,
      matricule: "",
      nom: "",
      ville: "",
      codepostal: "",
      moyenne: "",
    }));
  };

  const handleFilter = () => {
    const nom = form.nom.toLowerCase();
    const ville = form.ville.toLowerCase();

    const resultat = stagiaires.filter((s) => {
      const okNom = nom === "" || s.nom.toLowerCase().includes(nom);
      const okVille = ville === "" || s.ville.toLowerCase().includes(ville);
      return okNom && okVille;
    });

    setStagiaires2(resultat);
  };

  const handleInitRecherche = () => {
    setStagiaires2([]);
  };

  const moyennes = stagiaires.map((s) => s.moyenne);
  const moyMax = moyennes.length ? Math.max(...moyennes) : 0;
  const moyMin = moyennes.length ? Math.min(...moyennes) : 0;
  const moyClasse =
    moyennes.length > 0
      ? moyennes.reduce((a, b) => a + b, 0) / moyennes.length
      : 0;

  return (
    <div>
      <h2>Liste des Stagiaires</h2>

      {stagiaires.length === 0 ? (
        <p style={{ color: "red" }}>tableau des stagiaires vide</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Ville</th>
              <th>Code Postal</th>
              <th>Moyenne</th>
              <th>Supprimer</th>
              <th>Editer</th>
            </tr>
          </thead>
          <tbody>
            {stagiaires.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.matricule}</td>
                <td>{s.nom}</td>
                <td>{s.ville}</td>
                <td>{s.codepostal}</td>
                <td>{s.moyenne}</td>
                <td>
                  <button onClick={() => handleDelete(s.id)}>Supprimer</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(s)}>Editer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Formulaire</h3>
      <div>
        <div>
          <label>id : </label>
          <input name="id" value={form.id} readOnly />
        </div>
        <div>
          <label>Matricule : </label>
          <input
            name="matricule"
            value={form.matricule}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nom : </label>
          <input name="nom" value={form.nom} onChange={handleChange} />
        </div>
        <div>
          <label>Ville : </label>
          <input name="ville" value={form.ville} onChange={handleChange} />
        </div>
        <div>
          <label>CodePostal : </label>
          <input
            name="codepostal"
            value={form.codepostal}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Moyenne : </label>
          <input
            name="moyenne"
            value={form.moyenne}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleAdd}>Ajouter</button>
        <button onClick={handleFilter}>Filtrer ville et Nom</button>
        <button onClick={handleVider}>Vider</button>
        <button onClick={handleInitRecherche}>initialiser recherche</button>
      </div>

      <h3>Statistiques</h3>
      <p>La Moyenne générale la plus Élevée : {moyMax.toFixed(2)}</p>
      <p>La Moyenne générale la moins Élevée : {moyMin.toFixed(2)}</p>
      <p>Le Moyenne de la classe : {moyClasse.toFixed(2)}</p>

      <h3>Tableau de recherche</h3>
      {stagiaires2.length === 0 ? (
        <p>Tableau de recherche vide</p>
      ) : (
        <ul>
          {stagiaires2.map((s) => (
            <li key={s.id}>
              {s.nom} - {s.ville} - {s.matricule}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
