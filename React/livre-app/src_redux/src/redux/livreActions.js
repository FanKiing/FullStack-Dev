export const ADD_LIVRE = "ADD_LIVRE";
export const REMOVE_LIVRE = "REMOVE_LIVRE";
export const DELETE_LIVRE = "DELETE_LIVRE";
export const UPDATE_LIVRE = "UPDATE_LIVRE";
// action creators =>générateur d'action
export const addLivre = (livre) => ({
  type: ADD_LIVRE,
  payload: livre
});
export const removeLivre = (isbn) => ({
  type: REMOVE_LIVRE,
  payload: isbn
});
export const deleteLivre = (isbn) => ({
  type: REMOVE_LIVRE,
  payload: isbn
});
export const updateLivre = (livre) => ({
  type: UPDATE_LIVRE,
  payload: livre
});
