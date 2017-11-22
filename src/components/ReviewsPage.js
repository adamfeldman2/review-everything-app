import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import ReviewsList from './ReviewsList';

const ReviewsPage = props => {
  return (
    <div>
      <div className="wrapper wrapper-reviews">
        <h1>Reviews</h1>
        <Filters />
        <Link to="/new">+ New Review</Link>
        <ReviewsList />
      </div>
    </div>
  );
};

export default ReviewsPage;
