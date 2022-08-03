import { FilterActions, FilterActionType } from './filterActions';
import { FilterState } from './filterState';

export const filterReducer = (state: FilterState, action: FilterActionType) => {
  switch (action.type) {
    case FilterActions.SET_FILTER:
      return action.payload;
    case FilterActions.SET_FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload,
      };
    case FilterActions.SET_FILTER_AUTHOR:
      return {
        ...state,
        selectedAuthor: action.payload,
      };
    case FilterActions.SET_FILTER_GENRE:
      return {
        ...state,
        selectedGenre: action.payload,
      };
    case FilterActions.SET_FILTER_SAGA:
      return {
        ...state,
        selectedSaga: action.payload,
      };
    default:
      return state;
  }
};
