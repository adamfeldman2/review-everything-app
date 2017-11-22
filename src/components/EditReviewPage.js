import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { startEditReview, startRemoveReview } from '../actions/reviews';

const EditReviewPage = props => {
  return (
    <div>
      <div className="wrapper wrapper-edit-review">
        <h1>Edit Review</h1>
        <p>Editing Review ID: {props.match.params.id}</p>
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
