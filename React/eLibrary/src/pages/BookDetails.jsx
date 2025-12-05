import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBookById,
  selectOne,
  updateLocalRating,
} from "../features/books/booksSlice";
import { addToCart } from "../features/cart/cartSlice";
import RatingStars from "../components/RatingStars";

export default function BookDetails() {
  const { id } = useParams();
  const d = useDispatch();
  const b = useSelector(selectOne);

  useEffect(() => {
    d(fetchBookById(id));
  }, [id]);

  if (!b) return <p className="container">Loading...</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={b.image} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-8">
          <h2>{b.title}</h2>
          <p className="text-muted">{b.author}</p>
          <p className="badge badge-category">{b.category}</p>
          <p className="book-desc mt-3">{b.description}</p>

          <div className="mt-3">
            <RatingStars
              value={b.rating}
              onChange={(r) => d(updateLocalRating({ id: b.id, rating: r }))}
            />
          </div>

          <h3 className="mt-3">${b.price}</h3>
          <button className="btn btn-primary" onClick={() => d(addToCart(b))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
