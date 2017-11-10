import React, { Component } from 'react';
import AppRouter from '../routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import '../styles/App.css';
import { submitReview } from '../actions/reviews';

const store = configureStore();

store.dispatch(
  submitReview({
    title: 'Test Review',
    stars: 3.5,
    note: 'This is a test note, for the test review,'
  })
);

const state = store.getState();
console.log('State: ', state);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
