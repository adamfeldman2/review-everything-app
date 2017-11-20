const filtersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CATEGORY_FILTER':
      return {
        category: action.category
      };

    default:
      return state;
  }
};

export default filtersReducer;
