import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import booksReducer, { addLike, deleteBook, setSearch, modifyRating } from './booksSlice'
import BookList from './BookList'

describe('BookList', () => {
const initialBooks = [
{ id: 1, title: 'React', rating: 3, likes: 0, image: '' },
{ id: 2, title: 'Redux', rating: 5, likes: 2, image: '' }
]

// Création du store et rendu une seule fois pour tous les tests
let store
beforeEach(() => {
store = configureStore({
reducer: { books: booksReducer },
preloadedState: { books: { items: initialBooks, search: '', status: 'succeeded', error: null } }
})
render( <Provider store={store}> <BookList /> </Provider>
)
})

test('renders search input', () => {
expect(screen.getByPlaceholderText('Search books...')).toBeInTheDocument()
})

test('renders list of books', () => {
expect(screen.getByText('React')).toBeInTheDocument()
expect(screen.getByText('Redux')).toBeInTheDocument()
})

test('filters books by search', () => {
const input = screen.getByPlaceholderText('Search books...')
fireEvent.change(input, { target: { value: 'react' } })
expect(screen.getByText('React')).toBeInTheDocument()
expect(screen.queryByText('Redux')).toBeNull()
})

test('click Like button increments likes', () => {
const likeButtons = screen.getAllByText('Like')
fireEvent.click(likeButtons[0])
const state = store.getState()
expect(state.books.items[0].likes).toBe(1)
})

test('click Delete button removes book', () => {
const deleteButtons = screen.getAllByText('Delete')
fireEvent.click(deleteButtons[0])
const state = store.getState()
expect(state.books.items).toHaveLength(1)
expect(state.books.items[0].title).toBe('Redux')
})

test('click on star modifies rating', () => {
const stars = screen.getAllByRole('img') // les étoiles sont des SVG
fireEvent.click(stars[4]) // clique sur la 5ème étoile du premier livre
const state = store.getState()
expect(state.books.items[0].rating).toBe(5)
})

test('typing in search input updates search state', () => {
const input = screen.getByPlaceholderText('Search books...')
fireEvent.change(input, { target: { value: 'Redux' } })
const state = store.getState()
expect(state.books.search).toBe('Redux')
})
})
