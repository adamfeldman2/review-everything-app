import React from 'react';
import CategoryFilter from './CategoryFilter';
import Search from './Search';

class Filters extends React.Component {
  render() {
    return (
      <div>
        <CategoryFilter />
        <Search />
      </div>
    );
  }
}

export default Filters;
