import React from 'react'
import { FaStar, FaRegStar, FaEdit } from 'react-icons/fa'
import {Link } from 'react-router-dom'

const BookCard = ({ book, onLike, onDelete, onRatingChange }) => {


  const stars = Array.from({ length: 5 }, (_, i) =>
    i < book.rating ? (
      <FaStar
        key={i}
        color="gold"
        style={{ cursor: 'pointer' }}
        onClick={() => onRatingChange(book.id, i + 1)}
      />
    ) : (
      <FaRegStar
        key={i}
        color="gold"
        style={{ cursor: 'pointer' }}
        onClick={() => onRatingChange(book.id, i + 1)}
      />
    )
  )

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      {book.image && (
        <img
          src={book.image}
          className="card-img-top"
          alt={book.title}
        />
      )}

      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>

        <div className="mb-2">{stars}</div>

        <span data-testid={`likes-${book.id}`}>
          Likes: {book.likes}
        </span>

        <div className="mt-3 d-flex justify-content-between">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onLike(book.id)}
          >
            Like
          </button>

          <Link
            className="btn btn-warning btn-sm"
            to={`/edit/${book.id}`}
          >
            <FaEdit /> Edit
          </Link>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(book.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
