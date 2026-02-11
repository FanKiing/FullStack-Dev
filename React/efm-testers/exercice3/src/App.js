import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);     
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Liste des pays et cas Covid</h2>

      {/* ✅ 2) Affichage pays + nombre de cas (4 pts) */}
      <ul>
        {data.map((item) => (
          <li key={item.country}>
            {item.country} -------- {item.cases}
          </li>
        ))}
      </ul>
    </div>
  );
}
