import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import returnStateReducer from "./reducers";

const store = createStore(returnStateReducer, applyMiddleware(thunk));

export default store;
