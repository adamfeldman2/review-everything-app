import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reviewReducer } from '../reducers/reviews';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      reviews: reviewReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
