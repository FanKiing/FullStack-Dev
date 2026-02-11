import React, { useState } from "react";

function AjoutLivre() {

  const [num, setNum] = useState("");
  const [titre, setTitre] = useState("");
  const [dateEdition, setDateEdition] = useState("");
  const [genre, setGenre] = useState("Comédie");
  const [prix, setPrix] = useState("");

  const [livres, setLivres] = useState([]);

  const AjouterLivre = () => {

    if (!num || !titre || !dateEdition || !genre || !prix) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    if (parseFloat(prix) > 200) {
      alert("Le prix ne doit pas dépasser 200 DH !");
      return;
    }

    const nouveauLivre = {
      num,
      titre,
      dateEdition,
      genre,
      prix
    };

    setLivres([...livres, nouveauLivre]);

    setNum("");
    setTitre("");
    setDateEdition("");
    setGenre("Comédie");
    setPrix("");
  };

  const Reset = () => {
    setLivres([]);
  };

  return (
    <div className="container">
      <h2>Ajouter un livre</h2>

      <input
        type="number"
        placeholder="Num"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <br /><br />

      <input
        type="date"
        value={dateEdition}
        onChange={(e) => setDateEdition(e.target.value)}
      />
      <br /><br />

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option>Comédie</option>
        <option>Tragédie</option>
        <option>Roman</option>
      </select>
      <br /><br />

      <input
        type="number"
        placeholder="Prix"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
      />
      <br /><br />

      <button onClick={AjouterLivre}>Ajouter</button>
      <button onClick={Reset}>Réinitialiser</button>

      <hr />

      <h3>Liste des livres :</h3>
      <ul>
        {livres.map((livre, index) => (
          <li key={index}>
            Num : {livre.num} | 
            Titre : {livre.titre} | 
            Date : {livre.dateEdition} | 
            Genre : {livre.genre} | 
            Prix : {livre.prix} DH
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AjoutLivre;
