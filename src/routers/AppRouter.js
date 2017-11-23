import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import ReviewsPage from '../components/ReviewsPage';
import NewReviewPage from '../components/NewReviewPage';
import FullReviewPage from '../components/FullReviewPage';
import EditReviewPage from '../components/EditReviewPage';
import ProfilePage from '../components/ProfilePage';
import Login from '../components/Login';
import FourOhFour from '../components/FourOhFour';
import Footer from '../components/Footer';

const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/reviews" component={ReviewsPage} />
          <Route path="/new" component={NewReviewPage} />
          <Route path="/review/:id" component={FullReviewPage} />
          <Route path="/edit/:id" component={EditReviewPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export { history, AppRouter as default };
