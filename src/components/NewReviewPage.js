import React from 'react';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSubmitReview } from '../actions/reviews';

const NewReviewPage = props => {
  return (
    <div className="wrapper-new-review-page">
      <div className="wrapper-page-title">
        <div className="wrapper wrapper-page-title-content">
          <h1>New Review</h1>
        </div>
      </div>
      <div className="wrapper wrapper-new-review-page-content">
        <Link className="button button-all-reviews" to="/reviews">
          &#8592; All Reviews
        </Link>
        <ReviewForm
          onSubmit={review => {
            props.dispatch(startSubmitReview(review));
            props.history.push('/reviews');
          }}
        />
      </div>
    </div>
  );
};

export default connect()(NewReviewPage);
