import React from 'react';
import Review from './Review';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Filters from './Filters';

const Reviews = props => {
  return (
    <div>
      <div className="wrapper wrapper-reviews">
        <h1>Reviews</h1>
        <Filters />
        <Link to="/new">+ New Review</Link>
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
    </div>
  );
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

export default connect(mapStateToProps)(Reviews);
