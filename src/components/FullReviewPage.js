import React from 'react';
import Review from './Review';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const FullReviewPage = props => {
  console.log('Review:', props);
  return (
    <div className="wrapper wrapper-full-review-page">
      <h1>Full Review Page</h1>
      <Link to="/reviews">&#8592; All Reviews</Link>
      {props.targetedReview.length > 0 && (
        <div>
          <Review {...props.targetedReview[0]} titleUnlinkable={true} />
          <Link to={`/edit/${props.targetedReview[0].id}`}>Edit</Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    targetedReview: state.reviews.filter(review => {
      return props.match.params.id === review.id;
    })
  };
};

export default connect(mapStateToProps)(FullReviewPage);
