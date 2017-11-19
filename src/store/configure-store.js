import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reviewReducer from '../reducers/reviews';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      reviews: reviewReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
