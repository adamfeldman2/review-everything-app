import React from 'react';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSubmitReview } from '../actions/reviews';

const NewReview = props => {
  return (
    <div>
      <div className="wrapper wrapper-new-review">
        <h1>New Review</h1>
        <Link to="/">&#8592; All Reviews</Link>
        <ReviewForm
          onSubmit={review => {
            props.dispatch(startSubmitReview(review));
            props.history.push('/');
          }}
        />
      </div>
    </div>
  );
};

export default connect()(NewReview);
