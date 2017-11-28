import React from 'react';
import { connect } from 'react-redux';
import { categoryFilter } from '../actions/filters';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.currentCategory
    };

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(e) {
    const category = e.target.value;
    this.props.categoryFilter(category);
    this.setState(() => {
      return {
        category
      };
    });
  }

  render() {
    return (
      <label className="wrapper-category-filter">
        <select value={this.state.category} onChange={this.handleCategoryChange}>
          <option value="all">ALL</option>
          {this.props.uniqueReviewsArr.length > 0 &&
            this.props.uniqueReviewsArr.map(review => {
              return (
                <option key={review.category} value={review.category}>
                  {review.category.toUpperCase()}
                </option>
              );
            })}
        </select>
      </label>
    );
  }
}

const mapStateToProps = state => {
  const uniqueCategories = [];
  return {
    uniqueReviewsArr: state.reviews
      .filter(review => {
        if (uniqueCategories.indexOf(review.category) <= -1) {
          uniqueCategories.push(review.category);
          return review;
        }
      })
      .sort((a, b) => {
        return a.category > b.category ? 1 : -1;
      }),

    currentCategory: state.filters.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryFilter: (reviews, category) => {
      dispatch(categoryFilter(reviews, category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
