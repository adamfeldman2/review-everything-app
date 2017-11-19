import React, { Component } from 'react';
import AppRouter from '../routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import '../styles/App.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from '../firebase/firebase';

const store = configureStore();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Logged in');
  } else {
    console.log('Logged out');
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
