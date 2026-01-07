import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import BookCard from './BookCard'

const book = {
  id: 1,
  title: 'React Testing',
  rating: 3,
  likes: 4,
  image: 'https://via.placeholder.com/150'
}

describe('BookCard Component', () => {
  let onLikeFct, onDeleteFct, onRatingChangeFct
  beforeEach(() => {
    onLikeFct = jest.fn()
    onDeleteFct = jest.fn()
    onRatingChangeFct = jest.fn()
    
    render(
      <BookCard
        book={book}
        onLike={onLikeFct}
        onDelete={onDeleteFct}
        onRatingChange={onRatingChangeFct}
      />
    )
  })

  test('renders book title, image and likes', () => {
    expect(screen.getByText('React Testing')).toBeInTheDocument()
    expect(screen.getByAltText('React Testing')).toHaveAttribute('src', book.image)
    expect(screen.getByText(/Likes: 5/i)).toBeInTheDocument()
  })

  test('calls onLike when Like button is clicked', () => {
    fireEvent.click(screen.getByText('Like'))
    expect(onLikeFct).toHaveBeenCalledWith(book.id)
  })

  test('calls onDelete when Delete button is clicked', () => {
    fireEvent.click(screen.getByText('Delete'))
    expect(onDeleteFct).toHaveBeenCalledWith(book.id)
  })

  test('renders correct number of stars', () => {
    const stars = screen.getAllByRole('img', { hidden: true }) // FaStar/FaRegStar sont rendus comme <svg>
    expect(stars.length).toBe(5)
  })

  test('calls onRatingChange when a star is clicked', () => {
    const stars = screen.getAllByRole('img', { hidden: true })
    fireEvent.click(stars[4]) 
    expect(onRatingChangeFct).toHaveBeenCalledWith(book.id, 5)
  })
})
