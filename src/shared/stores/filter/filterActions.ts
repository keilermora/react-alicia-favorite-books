import { FilterState } from './filterState';

export enum FilterActions {
  SET_FILTER = 'SET_FILTER',
  SET_FILTER_TEXT = 'SET_FILTER_TEXT',
  SET_FILTER_AUTHOR = 'SET_FILTER_AUTHOR',
  SET_FILTER_GENRE = 'SET_FILTER_GENRE',
  SET_FILTER_SAGA = 'SET_FILTER_SAGA',
}

export type FilterActionType =
  | { type: typeof FilterActions.SET_FILTER; payload: FilterState }
  | { type: typeof FilterActions.SET_FILTER_TEXT; payload: string }
  | { type: typeof FilterActions.SET_FILTER_AUTHOR; payload: string }
  | { type: typeof FilterActions.SET_FILTER_GENRE; payload: string }
  | { type: typeof FilterActions.SET_FILTER_SAGA; payload: string };
