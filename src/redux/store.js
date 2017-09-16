import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './reducer';
import client from './client';


const store = createStore(
  combineReducers({
    reducer,
    apollo: client.reducer(),
    router: routerReducer,
  }),
  composeWithDevTools(
    applyMiddleware(
      client.middleware(),
      thunk),
  ),
);

export default store;
