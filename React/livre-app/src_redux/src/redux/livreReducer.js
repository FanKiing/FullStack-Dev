import {
  ADD_LIVRE,
  REMOVE_LIVRE,
  DELETE_LIVRE,
  UPDATE_LIVRE
} from "./livreActions";
const initialState = [];
export default  livreReducer=(state = initialState, action)=>{
  switch (action.type) {

    case ADD_LIVRE:
      // vérifier doublon
      const existe = state.some(item => item.isbn === action.payload.isbn);
      if (!existe) return [...state, action.payload];
      return state;

    case REMOVE_LIVRE:
      return state.filter(item => item.isbn !== action.payload);

    

    case UPDATE_LIVRE:
      return state.map(item =>
        item.isbn === action.payload.isbn ? action.payload : item
      );

    default:
      return state;
  }
}
