import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import NewReview from '../components/NewReview';
import EditReview from '../components/EditReview';
import Profile from '../components/Profile';
import Login from '../components/Login';
import FourOhFour from '../components/FourOhFour';

const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/new" component={NewReview} />
          <Route path="/edit/:id" component={EditReview} />
          <Route path="/profile" component={Profile} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
};

export { history, AppRouter as default };
