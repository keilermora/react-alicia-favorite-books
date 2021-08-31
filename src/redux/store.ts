import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import returnStateReducer from './reducers';

const store: Store = createStore(returnStateReducer, applyMiddleware(thunk));

export default store;
