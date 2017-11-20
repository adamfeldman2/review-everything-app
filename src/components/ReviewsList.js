import React from 'react';
import Review from './Review';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ReviewsList = props => {
  return (
    <div>
      {props.reviews.length > 0 &&
        props.reviews.map(reviewObj => {
          return (
            <div key={reviewObj.title}>
              <Review {...reviewObj} />
              <Link to={`/edit/${reviewObj.id}`}>Edit</Link>
              <div>----------------------------------------------------------------------</div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

export default connect(mapStateToProps)(ReviewsList);
