import {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { setCategory, setPrice, setColor, setRating } from '../features/ProductSlice';
import { FaStar } from "react-icons/fa"; 
const Filters = () => {
  const dispatch = useDispatch()
  const {items,filters} = useSelector(state => state.products);
  const selectedRating=filters.rating;
  const cats=[...new Set((items.map(i=>i.category)))];
  return (
    <div>
      <h6>Category</h6>
      {cats.map(c => (
        <div key={c}>
          <input type="radio" name='cat' onChange={() => dispatch(setCategory(c))} /> {c}
        </div>
      ))}

      <h6 className="mt-3">Rating</h6>
       {[1, 2, 3, 4, 5].map(r => (
        <FaStar
          key={r}
          size={24}
          onClick={() => dispatch(setRating(r))} // ton dispatch
          style={{
            cursor: "pointer",
            color: r <= selectedRating ? "gold" : "lightgray", // jaune si sélectionné
          }}
        />
      ))}

      
    </div>
  )
}

export default Filters
