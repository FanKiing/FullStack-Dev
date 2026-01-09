import reducer, {
  setCategory,
  setRating,
  updateRating
} from './ProductSlice'

describe('productSlice', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      items: [{ id: 1, rating: 3 }],
      filters: { category: 'All', price: 'All', color: 'All', rating: 0 },
      status: 'idle'
    }
  })

  test('setCategory', () => {
    const state = reducer(initialState, setCategory('Sneakers'))
    expect(state.filters.category).toBe('Sneakers')
  })

  test('setRating filter', () => {
    const state = reducer(initialState, setRating(4))
    expect(state.filters.rating).toBe(4)
  })

  test('update product rating', () => {
    const state = reducer(initialState, updateRating({ id: 1, rating: 5 }))
    expect(state.items[0].rating).toBe(5)
  })
})
