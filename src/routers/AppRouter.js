import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import NewReview from '../components/NewReview';
import Profile from '../components/Profile';
import FourOhFour from '../components/FourOhFour';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Reviews} />
          <Route path="/new" component={NewReview} />
          <Route path="/profile" component={Profile} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
