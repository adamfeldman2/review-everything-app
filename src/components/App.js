import React, { Component } from 'react';
import AppRouter from '../routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import '../styles/App.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { submitReview } from '../actions/reviews';

const store = configureStore();

store.dispatch(
  submitReview({
    id: '-KyawryBbjyWhKpNqGRX',
    title: 'Test Review',
    date: 1497888000000,
    stars: 1.5,
    note: 'This is a test note, for the test review,'
  })
);

store.dispatch(
  submitReview({
    id: '-Kyax9lTrQ_MBEyx0iv3',
    title: 'Test Review 2',
    date: 1504713600000,
    stars: 4,
    note: 'This is a test note, for the test review 2!!!'
  })
);

const state = store.getState();
console.log('State for App.js: ', state);

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
