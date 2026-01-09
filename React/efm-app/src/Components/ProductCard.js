import { FaStar, FaRegStar } from 'react-icons/fa'

const ProductCard = ({ product, onRate }) => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < product.rating ? (
      <FaStar
        key={i}
        color="gold"
        data-testid={`star-${i}`}
        onClick={() => onRate(product.id, i + 1)}
      />
    ) : (
      <FaRegStar
        key={i}
        data-testid={`star-${i}`}
        onClick={() => onRate(product.id, i + 1)}
      />
    )
  )

  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" />
      <div className="card-body">
        <h6>{product.name}</h6>
        <div>{stars}</div>
        <p>
          <strong>${product.promoPrice}</strong>{' '}
          <del>${product.price}</del>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
