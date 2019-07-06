import { createStore } from 'redux';
import RootReducer from './reducers';

/**
 * const initialState = {
 *   data: {
 *     books: [],
 *     authors: [],
 *     genres: [],
 *     sagas: []
 *   },
 *   filter: {
 *     text: '',
 *     author: '',
 *     genre: '',
 *     saga: ''
 *   },
 *   route: {
 *     previous: '',
 *     current: ''
 *   }
 * }
 */

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
