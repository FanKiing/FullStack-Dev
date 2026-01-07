import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import booksReducer, { addBook, editBook } from './booksSlice'
import BookForm from './BookForm'

describe('BookForm', () => {
  let store

  beforeEach(() => {
    store = configureStore({
      reducer: { books: booksReducer },
      preloadedState: {
        books: { items: [], search: '', status: 'idle' }
      }
    })

    render(
      <Provider store={store}>
        <BookForm />
      </Provider>
    )
  })

  test('renders Add Book form', () => {
    expect(screen.getByText('Add Book')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument()
  })

  test('adds a new book', () => {
    fireEvent.change(screen.getByPlaceholderText('Title'), {
      target: { value: 'New Book' }
    })
    fireEvent.change(screen.getByPlaceholderText('Image URL'), {
      target: { value: 'img.png' }
    })
    fireEvent.change(screen.getByDisplayValue('0'), {
      target: { value: '4' }
    })

    fireEvent.click(screen.getByText('Add'))

    const state = store.getState()
    expect(state.books.items).toHaveLength(1)
    expect(state.books.items[0].title).toBe('New Book')
    expect(state.books.items[0].image).toBe('img.png')
    expect(state.books.items[0].rating).toBe(4)
  })
})
