import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

function DetailsLivre() {
  const {isbn} = useParams();
  const livre = useSelector((state) =>
    state.livre.find((item) => item.isbn === isbn)
  );

  if (!livre) return <h3>Livre introuvable</h3>;

  return (
    <div className="card p-4 shadow">
      <h3>{livre.titre}</h3>
      <p><strong>ISBN :</strong> {livre.isbn}</p>
      <p><strong>Auteur :</strong> {livre.auteur}</p>
      <p><strong>Prix :</strong> {livre.prix} Dh</p>

      <Link to="/" className="btn btn-secondary">Retour</Link>
    </div>
  );
}

export default DetailsLivre;
