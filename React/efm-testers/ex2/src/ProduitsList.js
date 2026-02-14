import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProduitsList() {
  const [produits, setProduits] = useState([]);
  const [nom, setNom] = useState("");
  const [quantite, setQuantite] = useState("");

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const res = await axios.get("https://api.example.com/products");
        setProduits(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération :", error);
      }
    };
    fetchProduits();
  }, []);

  const ajouterProduit = () => {
    if (!nom.trim() || !quantite.trim()) return;

    const newProduit = {
      id: Date.now(), // id local (car API fictive)
      nom: nom.trim(),
      quantite: Number(quantite),
      favorite: false,
    };

    setProduits([...produits, newProduit]);
    setNom("");
    setQuantite("");
  };

  const supprimerProduit = (id) => {
    setProduits(produits.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Liste des produits</h2>

      <div style={{ marginBottom: 15 }}>
        <input
          type="text"
          placeholder="Nom du produit"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          style={{ marginRight: 10 }}
        />

        <input
          type="number"
          placeholder="Quantité"
          value={quantite}
          onChange={(e) => setQuantite(e.target.value)}
          style={{ marginRight: 10, width: 120 }}
        />

        <button onClick={ajouterProduit}>Ajouter</button>
      </div>

      <ul>
        {produits.map((p) => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            <strong>{p.nom}</strong> — Quantité : {p.quantite}{" "}
            <button onClick={() => supprimerProduit(p.id)} style={{ marginLeft: 10 }}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
