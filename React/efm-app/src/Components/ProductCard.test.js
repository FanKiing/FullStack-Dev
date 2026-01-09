import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from './ProductCard'

test('click on star updates rating', () => {
  const product = { id: 1, rating: 3, name: 'Test', price: 10, promoPrice: 20, image: '' }
  const onRate = jest.fn()

  render(<ProductCard product={product} onRate={onRate} />)

  fireEvent.click(screen.getByTestId('star-4'))
  expect(onRate).toHaveBeenCalledWith(1, 5)
})
