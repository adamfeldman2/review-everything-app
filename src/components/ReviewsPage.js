import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import ReviewsList from './ReviewsList';

const ReviewsPage = props => {
  return (
    <div>
      <div className="wrapper-reviews-page">
        <div className="wrapper-page-title">
          <div className="wrapper wrapper-page-title-content">
            <h1>Your Reviews</h1>
          </div>
        </div>
        <div className="wrapper">
          <Filters />
          <Link className="button button-new-review" to="/new">
            + New Review
          </Link>
          <ReviewsList />
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
