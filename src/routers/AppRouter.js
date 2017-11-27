import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReviewsPage from '../components/ReviewsPage';
import NewReviewPage from '../components/NewReviewPage';
import FullReviewPage from '../components/FullReviewPage';
import EditReviewPage from '../components/EditReviewPage';
import ProfilePage from '../components/ProfilePage';
import Login from '../components/Login';
import FourOhFour from '../components/FourOhFour';
import PrivateRoute from './PrivateRoute';

const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/reviews" component={ReviewsPage} />
          <PrivateRoute path="/new" component={NewReviewPage} />
          <PrivateRoute path="/review/:id" component={FullReviewPage} />
          <PrivateRoute path="/edit/:id" component={EditReviewPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
};

export { history, AppRouter as default };
