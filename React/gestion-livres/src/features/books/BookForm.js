import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams,useNavigate} from 'react-router-dom'
import {addBook,editBook} from './BooksSlice'

const BookForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const bookToEdit = useSelector(state =>
    state.books.items.find(b => b.id === Number(id))
  )

  const [formData, setFormData] = useState({
    title: bookToEdit?.title || '',
    image: bookToEdit?.image || '',
    rating: bookToEdit?.rating || 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (bookToEdit) {
      dispatch(editBook({ ...bookToEdit, ...formData }))
    } else {
      dispatch(
        addBook({
          id: Date.now(),
          likes: 0,
          rating: Number(formData.rating),
          ...formData
        })
      )
    }

    navigate('/')
  }

  return (
    <form className="card p-3 mb-3" onSubmit={handleSubmit}>
      <h5 className="mb-3">
        {bookToEdit ? 'Edit Book' : 'Add Book'}
      </h5>

      <input
        type="text"
        name="title"
        className="form-control mb-2"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="image"
        className="form-control mb-2"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <input
        type="number"
        name="rating"
        className="form-control mb-3"
        min="0"
        max="5"
        value={formData.rating}
        onChange={handleChange}
      />

      <button className="btn btn-success">
        {bookToEdit ? 'Update' : 'Add'}
      </button>
    </form>
  )
}

export default BookForm
