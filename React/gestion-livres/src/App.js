import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import BookList from './features/books/BookList'
import BookForm from './features/books/BookForm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<BookForm />} />
        <Route path="/edit/:id" element={<BookForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
