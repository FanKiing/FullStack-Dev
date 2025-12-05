import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import RatingStars from "./RatingStars";

export default function BookCard({ b }) {
  const d = useDispatch();

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img className="card-img-top" src={b.image} alt={b.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="book-title">{b.title}</h5>
          <p className="text-muted">{b.author}</p>
          <RatingStars value={b.rating} />
          <p className="fw-bold mt-2">${b.price}</p>

          <div className="mt-auto d-flex justify-content-between">
            <Link className="btn btn-outline-primary btn-sm" to={`/book/${b.id}`}>
              Details
            </Link>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => d(addToCart(b))}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
