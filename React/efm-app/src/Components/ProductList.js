import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard'
import { updateRating,fetchProducts } from '../features/ProductSlice';

const ProductList = () => {
  const dispatch = useDispatch()
useEffect(()=>{
    dispatch(fetchProducts());
},[dispatch]);

  const { items, filters } = useSelector(state => state.products)

 const filtered = items.filter(p =>
    (filters.category === 'All' || p.category === filters.category) &&
    p.rating >= filters.rating
  )

  return (
    <div className="row">
      {filtered.map(p => (
        <div className="col-md-3 mb-4" key={p.id}>
          <ProductCard
            product={p}
            onRate={(id, rating) => dispatch(updateRating({ id, rating }))}
          />
        </div>
      ))}
    </div>
  )
}

export default ProductList
