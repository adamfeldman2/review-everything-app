import React from 'react';
import { connect } from 'react-redux';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'all'
    };

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(e) {
    const category = e.target.value;
    this.setState(() => {
      return {
        category
      };
    });
  }

  render() {
    return (
      <label>
        Category:
        <select value={this.state.category} onChange={this.handleCategoryChange}>
          <option value="all">ALL</option>
          {this.props.reviewsArr.length > 0 &&
            this.props.reviewsArr.map(review => {
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
    reviewsArr: state.reviews.filter(review => {
      if (uniqueCategories.indexOf(review.category) <= -1) {
        uniqueCategories.push(review.category);
        return review;
      }
    })
  };
};

export default connect(mapStateToProps)(CategoryFilter);
