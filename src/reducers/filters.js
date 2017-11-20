const filtersReducerInitialState = {
  category: 'all'
};

const filtersReducer = (state = filtersReducerInitialState, action) => {
  switch (action.type) {
    case 'CATEGORY_FILTER':
      return { ...state, category: action.category };

    default:
      return state;
  }
};

export default filtersReducer;
