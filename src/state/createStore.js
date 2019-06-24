// import { createStore as reduxCreateStore } from "redux"

// const reducer = (state, action) => {
//   if (action.type === `INCREMENT`) {
//     return Object.assign({}, state, {
//       count: state.count + 1,
//     })
//   }
//   return state
// }

// const initialState = { count: 0 }

// const createStore = () => reduxCreateStore(reducer, initialState)
// export default createStore


import { createStore as reduxCreateStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import defaultStore from '../Config/reducers';


const windowGlobal = typeof window !== 'undefined' && window

const reducerMap = { ...defaultStore }

const middleware = [];
const enhancers = [];

middleware.push(thunkMiddleware);
enhancers.push(applyMiddleware(...middleware));

const composeEnhancers = windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
const enhancer = composeEnhancers(...enhancers);
const rootReducer = combineReducers(reducerMap);


const createStore = () => reduxCreateStore(rootReducer, enhancer);

export default createStore