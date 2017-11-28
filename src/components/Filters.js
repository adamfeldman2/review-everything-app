import React from 'react';
import CategoryFilter from './CategoryFilter';
import Search from './Search';

class Filters extends React.Component {
  render() {
    return (
      <div className="wrapper-filters">
        <Search />
        <CategoryFilter />
      </div>
    );
  }
}

export default Filters;
