import React from 'react';
import Review from './Review';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Reviews = props => {
  return (
    <div>
      <div className="wrapper wrapper-reviews">
        <h1>Reviews</h1>
        <Link to="/new">+ New Review</Link>
        {props.reviews.map(review => {
          return <Review key={review.title} reviewData={review} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

export default connect(mapStateToProps)(Reviews);
