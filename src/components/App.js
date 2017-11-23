import React, { Component } from 'react';
import AppRouter, { history } from '../routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import { firebase } from '../firebase/firebase';
import { startFetchReviews } from '../actions/reviews';
import { login, logout } from '../actions/auth';
import '../styles/App.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    console.log('uid:', user.uid);
    store.dispatch(startFetchReviews());
    if (history.location.pathname === '/') {
      history.push('/reviews');
    }
  } else {
    store.dispatch(logout());
    console.log('Logged out');
    history.push('/');
  }
});

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
