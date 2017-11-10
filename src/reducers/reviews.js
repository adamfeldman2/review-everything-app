const reviewReducerDefaultState = [];

const reviewReducer = (state = reviewReducerDefaultState, action) => {
  switch (action.type) {
    case 'SUBMIT_REVIEW':
      return [...state, action.review];

    default:
      return state;
  }
};

export { reviewReducer };
