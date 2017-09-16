import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  authors: {},
  books: {},
  genres: {},
  bookID: '',
  filterText: '',
  filterType: 'title', // title || author || genre
  viewMode: 'app-view', // app-view || list-view
});

function authorsReducer(state = initialState.get('authors'), action = {}) {
  switch (action.type) {
    case 'SET_AUTHORS':
      return action.payload;
    default:
      return state;
  }
}

function booksReducer(state = initialState.get('books'), action = {}) {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.payload;
    default:
      return state;
  }
}

function genresReducer(state = initialState.get('genres'), action = {}) {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

function bookIDReducer(state = initialState.get('bookID'), action = {}) {
  switch (action.type) {
    case 'SET_BOOK_ID':
      return action.payload;
    default:
      return state;
  }
}


function filterTextReducer(state = initialState.get('filterText'), action = {}) {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return action.payload;
    default:
      return state;
  }
}

function filterTypeReducer(state = initialState.get('filterType'), action = {}) {
  switch (action.type) {
    case 'SET_FILTER_TYPE':
      return action.payload;
    default:
      return state;
  }
}

function viewModeReducer(state = initialState.get('viewMode'), action = {}) {
  switch (action.type) {
    case 'SET_VIEW':
      return action.payload;
    default:
      return state;
  }
}

export const reducer = combineReducers({
  authors: authorsReducer,
  bookID: bookIDReducer,
  books: booksReducer,
  filterText: filterTextReducer,
  filterType: filterTypeReducer,
  genres: genresReducer,
  viewMode: viewModeReducer,
});
