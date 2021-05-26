import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const initialState = {};

const middleware = [thunk];

function Store() {
  const store = createStore(rootReducers, initialState, applyMiddleware(...middleware));
  return {
    store
  }
}

export default Store;
