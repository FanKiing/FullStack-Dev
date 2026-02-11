import React, { useEffect, useState } from "react";

export default function SelectAlbum() {
  const [albums, setAlbums] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setSelectedId(String(data[0]?.id || ""));
      });
  }, []);

  const selectedAlbum = albums.find((a) => String(a.id) === String(selectedId));

  return (
    <div>
      <h3>Selectionner votre Album</h3>

      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        {albums.map((a) => (
          <option key={a.id} value={a.id}>
            {a.title}
          </option>
        ))}
      </select>

      {selectedAlbum && (
        <div style={{ marginTop: 10 }}>
          <p>Vous avez choisi l'id : {selectedAlbum.id}</p>
          <p>Le titre de l'album sélectionné est : {selectedAlbum.title}</p>
        </div>
      )}
    </div>
  );
}
