import React from 'react';
import { search } from '../actions/filters';
import { connect } from 'react-redux';
import selectedReviews from '../selectors/reviews';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: this.props.searchField
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    const searchField = e.target.value;
    this.setState(() => {
      return {
        searchField
      };
    });
    this.props.search(searchField);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.handleSearchChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: selectedReviews(state.reviews, state.filters)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: searchField => {
      dispatch(search(searchField));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
