import { createStore } from "redux";
import panierReducer from "./panierReducer";
const store = createStore(panierReducer);
export default store;
