import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const middleWares = [ReduxThunk];

const enhancerList = [applyMiddleware(...middleWares)];

const composedEnhancer = compose(...enhancerList);

const store = createStore(reducers, {}, composedEnhancer);

export default store;
