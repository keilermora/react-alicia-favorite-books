import { combineReducers } from 'redux';
import {
  SET_BOOK_LIST,
  SET_AUTHOR_LIST,
  SET_GENRE_LIST,
  SET_SAGA_LIST,
  SET_FILTER_TEXT,
  SET_FILTER_AUTHOR,
  SET_FILTER_GENRE,
  SET_FILTER_SAGA,
  SET_PREVIOUS_ROUTE,
  SET_CURRENT_ROUTE,
} from './actions';

function bookListReducer(state = [], action) {
  if (action.type === SET_BOOK_LIST) {
    return action.payload;
  }
  return state;
}

function authorListReducer(state = [], action) {
  if (action.type === SET_AUTHOR_LIST) {
    return action.payload;
  }
  return state;
}

function genreListReducer(state = [], action) {
  if (action.type === SET_GENRE_LIST) {
    return action.payload;
  }
  return state;
}

function sagaListReducer(state = [], action) {
  if (action.type === SET_SAGA_LIST) {
    return action.payload;
  }
  return state;
}

function filterTextReducer(state = '', action) {
  if (action.type === SET_FILTER_TEXT) {
    return action.payload;
  }
  return state;
}

function filterAuthorReducer(state = '', action) {
  if (action.type === SET_FILTER_AUTHOR) {
    return action.payload;
  }
  return state;
}

function filterGenreReducer(state = '', action) {
  if (action.type === SET_FILTER_GENRE) {
    return action.payload;
  }
  return state;
}

function filterSagaReducer(state = '', action) {
  if (action.type === SET_FILTER_SAGA) {
    return action.payload;
  }
  return state;
}

function previousRouteReducer(state = '', action) {
  if (action.type === SET_PREVIOUS_ROUTE) {
    return action.payload;
  }
  return state;
}

function currentRouteReducer(state = '', action) {
  if (action.type === SET_CURRENT_ROUTE) {
    return action.payload;
  }
  return state;
}

const RootReducer = combineReducers({
  data: combineReducers({
    books: bookListReducer,
    authors: authorListReducer,
    genres: genreListReducer,
    sagas: sagaListReducer,
  }),
  filter: combineReducers({
    text: filterTextReducer,
    author: filterAuthorReducer,
    genre: filterGenreReducer,
    saga: filterSagaReducer,
  }),
  route: combineReducers({
    previous: previousRouteReducer,
    current: currentRouteReducer,
  }),
});

export default RootReducer;
