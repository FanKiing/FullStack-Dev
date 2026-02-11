import React from "react";

function Produit({ produit }) {
  return (
    <div className="card">
      <img
        src={`/images/${produit.thumbnail}`}
        alt={produit.title}
      />
      <h3>{produit.title}</h3>
      <p>{produit.price} DH</p>
      <button>Ajouter au panier</button>
    </div>
  );
}

export default Produit;
