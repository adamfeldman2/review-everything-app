import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { startEditReview, startRemoveReview } from '../actions/reviews';
import { Link } from 'react-router-dom';

const EditReviewPage = props => {
  return (
    <div>
      <div className="wrapper wrapper-edit-review-page">
        <h1>Edit Review</h1>
        <Link to="/reviews">&#8592; All Reviews</Link>
        {props.review && (
          <ReviewForm
            {...props.review}
            onSubmit={review => {
              props.dispatch(startEditReview(review));
              props.history.push('/reviews');
            }}
          />
        )}

        <button
          onClick={() => {
            props.dispatch(startRemoveReview(props.review.id));
            props.history.push('/reviews');
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    review: state.reviews.find(review => {
      return review.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditReviewPage);
