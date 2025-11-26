export const ADDLIVRE = "ADDLIVRE";
export const REMOVELIVRE = "REMOVELIVRE";
export const addLivre = (livre) => ({ type: ADDLIVRE, payload: livre });
export const removeLivre = (id) => ({ type: REMOVELIVRE, payload: id });
