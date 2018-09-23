import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducer from "./reducer";

// 使用 redux-devtools以及中间件redux-thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);// 创建 store
export default store;