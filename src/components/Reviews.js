import React from 'react';
import Review from './Review';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startFetchReviews } from '../actions/reviews';

class Reviews extends React.Component {
  componentDidMount() {
    this.props.startFetchReviews();
  }

  render() {
    return (
      <div>
        <div className="wrapper wrapper-reviews">
          <h1>Reviews</h1>
          <Link to="/new">+ New Review</Link>
          {this.props.reviews.length > 0 &&
            this.props.reviews.map(reviewObj => {
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
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startFetchReviews: () => {
      dispatch(startFetchReviews());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
