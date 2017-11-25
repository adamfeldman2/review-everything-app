const filtersReducerInitialState = {
  category: 'all',
  searchField: ''
};

const filtersReducer = (state = filtersReducerInitialState, action) => {
  switch (action.type) {
    case 'CATEGORY_FILTER':
      return { ...state, category: action.category };

    case 'SEARCH':
      return { ...state, searchField: action.searchField };

    default:
      return state;
  }
};

export default filtersReducer;
