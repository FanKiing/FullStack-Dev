import { ADDLIVRE, REMOVELIVRE } from "./actions";
const initialState = { panier: [] };
export default function panierReducer(state = initialState, action) {
    switch (action.type) {
        case ADDLIVRE:
            return { ...state, panier: [...state.panier, action.payload] };
        case REMOVELIVRE:
            return { ...state, panier: state.panier.filter(l => l.id !== action.payload) };
        default:
            return state;
    }
}
