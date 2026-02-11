import React, { useState } from "react";
import Produit from "./Produit";
import "./style.css";

function App() {

  const [produits] = useState([
    {
      id: 2,
      title: "PC Portable Gamer",
      price: 2190,
      thumbnail: "https://www.asus-store.ma/cdn/shop/files/PC-PORTABLE-GAMING-ASUS-ROG-STRIX-17-RTX-3060-Setup-Game_jpg.webp?v=1686312691"
    },
    {
      id: 3,
      title: "PC Portable Chromebook Acer",
      price: 3640,
      thumbnail: "https://cdn.ratake.com/md5_cb9a6c9e1fe0c564aa4523c619bd10ec.jpg"
    },
    {
      id: 4,
      title: "PC Portable - HUAWEI",
      price: 1270,
      thumbnail: "https://duga.ma/wp-content/uploads/2024/11/duga-huawei-matebook-d14-i7-10th-a000002916.jpg"
    }
  ]);

  return (
    <div className="container">
      <h2>Notre Boutique</h2>

      <div className="cards">
        {produits.map((p) => (
          <Produit key={p.id} produit={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
