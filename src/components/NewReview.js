import React from 'react';
import NewReviewForm from './NewReviewForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitReview } from '../actions/reviews';

const NewReview = props => {
  console.log(props);
  return (
    <div>
      <div className="wrapper wrapper-new-review">
        <h1>New Review</h1>
        <Link to="/">&#8592; All Reviews</Link>
        <NewReviewForm
          onSubmit={review => {
            props.dispatch(submitReview(review));
            props.history.push('/');
          }}
        />
      </div>
    </div>
  );
};

export default connect()(NewReview);
