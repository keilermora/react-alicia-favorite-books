import { createStore } from 'redux';
import returnStateReducer from './reducers';

const store = createStore(returnStateReducer);

export default store;
