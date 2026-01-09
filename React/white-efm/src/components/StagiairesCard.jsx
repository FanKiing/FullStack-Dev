import React from "react";

export default function StagiairesCard({ stagiaire, onDelete, onEdit }) {
  const { nom, prenom, ville, filiere, photo } = stagiaire;

  return (
    <div data-testid="stagiaire-card" style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <img
        alt={`${nom} ${prenom}`}
        src={photo}
        style={{ width: 140, height: 90, objectFit: "cover", borderRadius: 6 }}
      />
      <p><b>Nom et prénom :</b> {nom} {prenom}</p>
      <p><b>Ville :</b> {ville}</p>
      <p><b>Filière :</b> {filiere}</p>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => onEdit(stagiaire)} aria-label="edit-stagiaire">Edit</button>
        <button onClick={() => onDelete(stagiaire.id)} aria-label="delete-stagiaire">Supprimer</button>
      </div>
    </div>
  );
}
