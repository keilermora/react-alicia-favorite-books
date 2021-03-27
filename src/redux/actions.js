/**
 * Acciones
 */
export const SET_BOOK_LIST = 'SET_BOOK_LIST';
export const SET_AUTHOR_LIST = 'SET_AUTHOR_LIST';
export const SET_GENRE_LIST = 'SET_GENRE_LIST';
export const SET_SAGA_LIST = 'SET_SAGA_LIST';

export const SET_FILTER_TEXT = 'SET_FILTER_TEXT';
export const SET_FILTER_AUTHOR = 'SET_FILTER_AUTHOR';
export const SET_FILTER_GENRE = 'SET_FILTER_GENRE';
export const SET_FILTER_SAGA = 'SET_FILTER_SAGA';

export const SET_PREVIOUS_ROUTE = 'SET_PREVIOUS_ROUTE';
export const SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE';

/*
 * Creador de acciones
 */
export function setBookList(list) {
  return { type: SET_BOOK_LIST, payload: list };
}

export function setAuthorList(list) {
  return { type: SET_AUTHOR_LIST, payload: list };
}

export function setGenreList(list) {
  return { type: SET_GENRE_LIST, payload: list };
}

export function setSagaList(list) {
  return { type: SET_SAGA_LIST, payload: list };
}

export function setFilterText(text) {
  return { type: SET_FILTER_TEXT, payload: text };
}

export function setFilterAuthor(idAuthor) {
  return { type: SET_FILTER_AUTHOR, payload: idAuthor };
}

export function setFilterGenre(idGenre) {
  return { type: SET_FILTER_GENRE, payload: idGenre };
}

export function setFilterSaga(idSaga) {
  return { type: SET_FILTER_SAGA, payload: idSaga };
}

export function setPreviousRoute(route) {
  return { type: SET_PREVIOUS_ROUTE, payload: route };
}

export function setCurrentRoute(route) {
  return { type: SET_CURRENT_ROUTE, payload: route };
}
