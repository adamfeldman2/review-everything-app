import React from 'react';
import Review from './Review';
import selectedReviews from '../selectors/reviews';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ReviewsList = props => {
  return (
    <div className="wrapper-reviews-list">
      {props.categories.length > 0 ? (
        // iterate over categories
        props.categories.map(({ category }) => {
          return (
            <div key={category} className="wrapper-category">
              {/*  display category heading if filter matches category or category is 'all' */}
              {props.categoryFilter === category || props.categoryFilter === 'all' ? (
                <h2>{category}</h2>
              ) : (
                ''
              )}
              {/* iterate over all reviews */}
              {props.reviews.map((reviewObj, i) => {
                // if review's category matches the category heading return the review
                if (reviewObj.category === category) {
                  return (
                    <div key={i}>
                      <Review {...reviewObj} />
                      <Link to={`/edit/${reviewObj.id}`}>Edit</Link>
                    </div>
                  );
                }
              })}
            </div>
          );
        })
      ) : (
        <div className="loading" />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const uniqueCategories = [];

  return {
    reviews: selectedReviews(state.reviews, state.filters),

    categories: selectedReviews(state.reviews, state.filters)
      .filter(review => {
        if (uniqueCategories.indexOf(review.category) === -1) {
          uniqueCategories.push(review.category);
          return review;
        }
      })
      .sort((a, b) => {
        return a.category.toLowerCase() > b.category.toLowerCase() ? 1 : -1;
      }),
    categoryFilter: state.filters.category
  };
};

export default connect(mapStateToProps)(ReviewsList);
