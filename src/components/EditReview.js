import React from 'react';
import { connect } from 'react-redux';
import NewReviewForm from './NewReviewForm';

const EditReview = props => {
  console.log(props.review);
  return (
    <div>
      <h1>Edit Review</h1>
      <p>Editing Review ID: {props.match.params.id}</p>
      <NewReviewForm
        {...props.review}
        onSubmit={review => {
          console.log(review);
        }}
      />
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

export default connect(mapStateToProps)(EditReview);
