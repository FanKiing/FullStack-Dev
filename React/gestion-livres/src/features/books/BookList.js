import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchBooks,addLike,deleteBook,setSearch,modifyRating} from './BooksSlice';
import BookCard from './BookCard'

const BookList=()=>{
const dispatch = useDispatch()
const { items, search, status } = useSelector(state => state.books)

useEffect(() => {
if (status === 'idle') {
dispatch(fetchBooks())
}
}, [dispatch, status])

const filteredBooks = items.filter(b =>
b.title.toLowerCase().includes(search.toLowerCase())
)

const handleRatingChange = (id, newRating) => {
dispatch(modifyRating({ id, rating: newRating }))
}

return ( <div>
<input
type="text"
placeholder="Search books..."
className="form-control mb-3"
value={search}
onChange={e => dispatch(setSearch(e.target.value))}
/>

  <div className="d-flex flex-wrap">
    {filteredBooks.map(book => (
      <BookCard
            key={book.id}
            book={book}
            onLike={id => dispatch(addLike(id))}
            onDelete={id => dispatch(deleteBook(id))}
            onRatingChange={handleRatingChange}
        />
    ))}
  </div>
</div>


)
}
export default BookList;