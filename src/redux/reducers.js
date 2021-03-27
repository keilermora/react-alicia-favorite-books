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

const initialState = {
  filterText: '',
  selectedAuthor: '',
  selectedGenre: '',
  selectedSaga: '',
};

const returnStateReducer = (state = initialState, action) => {
  if(action.type === SET_FILTER_TEXT) {
    return { ...state, filterText: action.payload };
  }

  return state;
};

export default returnStateReducer;
