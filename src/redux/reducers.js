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
  SET_FIREBASE_DATA,
} from './actions';

const initialState = {
  books: [],
  authors: [],
  genres: [],
  sagas: [],

  filterText: '',
  selectedAuthor: '',
  selectedGenre: '',
  selectedSaga: '',
};

const returnStateReducer = (state = initialState, action) => {
  switch(action.type) {
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
