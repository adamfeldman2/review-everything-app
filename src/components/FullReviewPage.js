import React from 'react';
import Review from './Review';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const FullReviewPage = props => {
  return (
    <div className="wrapper-full-review-page">
      <div className="wrapper-page-title">
        <div className="wrapper wrapper-page-title-content">
          <h1>Full Review</h1>
        </div>
      </div>
      <div className="wrapper wrapper-full-review-page-content">
        <Link to="/reviews" className="button button-all-reviews">
          &#8592; All Reviews
        </Link>
        {props.targetedReview.length > 0 && (
          <div>
            <Review {...props.targetedReview[0]} titleUnlinkable={true} />
            <Link className="button-edit" to={`/edit/${props.targetedReview[0].id}`}>
              Edit
            </Link>
          </div>
        )}
      </div>
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
