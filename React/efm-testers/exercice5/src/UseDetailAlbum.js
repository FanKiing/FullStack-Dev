import React, { useState } from "react";

export default function UseDetailAlbum() {
  const [id, setId] = useState("");
  const [album, setAlbum] = useState(null);
  const [error, setError] = useState("");

  const chercher = () => {
    setError("");
    setAlbum(null);

    if (!id || Number(id) < 1 || Number(id) > 100) {
      setError("L'id doit être entre 1 et 100");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Album introuvable");
        return res.json();
      })
      .then((data) => setAlbum(data))
      .catch(() => setError("Album introuvable"));
  };

  return (
    <div>
      <h3>Donnez l'id de l'album (entre 1 et 100)</h3>

      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Ex: 4"
      />
      <button onClick={chercher} style={{ marginLeft: 10 }}>
        Chercher
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {album && (
        <div style={{ marginTop: 10 }}>
          <p>Vous avez choisi l'id : {album.id}</p>
          <p>Le titre de l'album cherché est : {album.title}</p>
        </div>
      )}
    </div>
  );
}
