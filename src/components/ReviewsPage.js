import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import ReviewsList from './ReviewsList';

const ReviewsPage = props => {
  return (
    <div>
      <div className="wrapper wrapper-reviews-page">
        <h1>Your reviews</h1>
        <Filters />
        <Link className="button button-new-review" to="/new">
          + New Review
        </Link>
        <ReviewsList />
      </div>
    </div>
  );
};

export default ReviewsPage;
