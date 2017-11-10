import React, { Component } from 'react';
import AppRouter from '../routers/AppRouter';
// import configureStore from '../store/configure-store';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
