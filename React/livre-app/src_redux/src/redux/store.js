import { createStore, combineReducers } from "redux";
import livreReducer from "./livreReducer";

const rootReducer = combineReducers({
  livres: livreReducer
});

export const store = createStore(
  rootReducer,

);
