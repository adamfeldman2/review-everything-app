import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = props => {
  return (
    <div>
      <div className="wrapper wrapper-reviews">
        <h1>Reviews</h1>
        <Link to="/new">+ New Review</Link>
        <p>This is from the Reviews page.</p>
      </div>
    </div>
  );
};

export default Reviews;
