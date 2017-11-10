import React from 'react';
import { Link } from 'react-router-dom';

const NewReview = props => {
  return (
    <div>
      <div className="wrapper wrapper-new-review">
        <h1>New Review</h1>
        <Link to="/">&#8592; All Reviews</Link>
        <p>This is from NewReview.</p>
      </div>
    </div>
  );
};

export default NewReview;
