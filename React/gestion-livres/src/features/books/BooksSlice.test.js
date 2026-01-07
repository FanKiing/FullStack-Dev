import reducer, {fetchBooks,addBook,editBook,deleteBook,addLike,setSearch} from './booksSlice'
describe('fetchBooks.fulfilled', () => {
  const initialState = {
    items: [],
    status: 'loading',  
    error: null
  }

  test('remplit le state avec les livres et change status en succeeded', () => {
    const books = [
      { id: 1, title: 'React', likes: 0 },
      { id: 2, title: 'Redux', likes: 2 }
    ]
    const action = {
      type: fetchBooks.fulfilled.type,
      payload: books
    }
    const state = reducer(initialState, action)
    expect(state.status).toBe('succeeded')        
    expect(state.items).toEqual(books)          
    expect(state.items).toHaveLength(2)          
    expect(state.items[0].title).toBe('React')   
  })
})
//actions locales 
describe('actions du reducer', () => {
     it('can add a book',()=>{
        const book={id: 3,title:'Jest',likes:0} 
        const state = reducer(initialState, addBook(book)) 
        expect(state.items).toHaveLength(1) 
        expect(state.items[0]).toEqual(book)
     })
     it('can update a book',()=>{
        const oldState ={...initialState,items: [{ id: 1, title: 'Old Title', likes: 0 }] }
        const updatedBook = { id: 1, title: 'New Title', likes: 5 } 
        const newState = reducer(oldState, editBook(updatedBook)) 
        expect(newState.items[0].title).toBe('New Title') 
        expect(newState.items[0].likes).toBe(5)
     })
     it('can delete a book',()=>{
        const oldState = { ...initialState, items: [{ id: 1, title: 'React', likes: 0 }] } 
        const newState = reducer(oldState, deleteBook(1)) 
        expect(newState.items).toHaveLength(0)
     })
     it('can add like',()=>{
        const oldState = { ...initialState, items: [{ id: 1, title: 'React', likes: 0 }] } 
        const newState = reducer(oldState, addLike(1)) 
        expect(newState.items[0].likes).toBe(1)
     })
})
