import { AnyAction, Reducer } from 'redux';
import AppState from '../interfaces/AppState';
import {
  SET_FILTER_TEXT,
  SET_FILTER_AUTHOR,
  SET_FILTER_GENRE,
  SET_FILTER_SAGA,
  SET_FIREBASE_DATA,
} from './actions';

const initialState: AppState = {
  books: [],
  authors: [],
  genres: [],
  sagas: [],

  filterText: '',
  selectedAuthor: '',
  selectedGenre: '',
  selectedSaga: '',
};

const returnStateReducer: Reducer = (
  state: AppState = initialState,
  action: AnyAction
): AppState => {
  switch (action.type) {
    case SET_FIREBASE_DATA:
      const { books, authors, genres, sagas } = action.payload;

      return {
        ...state,
        books,
        authors,
        genres,
        sagas,
      };
    case SET_FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload,
      };
    case SET_FILTER_AUTHOR:
      return {
        ...state,
        selectedAuthor: action.payload,
      };
    case SET_FILTER_GENRE:
      return {
        ...state,
        selectedGenre: action.payload,
      };
    case SET_FILTER_SAGA:
      return {
        ...state,
        selectedSaga: action.payload,
      };
    default:
      return state;
  }
};

export default returnStateReducer;
