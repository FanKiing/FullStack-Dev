import { useSelector, useDispatch } from "react-redux";
import { remove} from "../features/LivreSlice";
import { Link } from "react-router-dom";

function Livres() {
  const livres = useSelector((state) => state.livre);
  const dispatch = useDispatch();

  return (
    <div className="row">
      {livres.map((liv) => (
        <div className="col-md-4 mb-3" key={liv.isbn}>
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">{liv.titre}</h5>
              <h6 className="card-subtitle text-muted mb-2">
                ISBN : {liv.isbn}
              </h6>

              <p>Auteur : {liv.auteur}</p>

              <div className="d-flex justify-content-between">
                <Link to={`/details/${liv.isbn}`} className="btn btn-info btn-sm">
                  Détails
                </Link>

                <Link to={`/edit/${liv.isbn}`} className="btn btn-warning btn-sm">
                  Modifier
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(remove(liv.isbn))}
                >
                  Supprimer
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Livres;
