import { render, screen } from '@testing-library/react'
import ProductList from './ProductList'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from '../features/products/productSlice'

test('renders filtered products', () => {
  const store = configureStore({
    reducer: { products: reducer },
    preloadedState: {
      products: {
        items: [{ id: 1, name: 'Nike', rating: 5 }],
        filters: { category: 'All', rating: 4 },
        status: 'idle'
      }
    }
  })

  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  )

  expect(screen.getByText('Nike')).toBeInTheDocument()
})
