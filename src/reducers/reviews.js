const reviewReducerDefaultState = [];

const reviewReducer = (state = reviewReducerDefaultState, action) => {
  switch (action.type) {
    case 'SUBMIT_REVIEW':
      return [...state, action.review];

    case 'EDIT_REVIEW':
      return state.map(review => {
        if (review.id === action.id) {
          return { ...review, ...action.updates };
        } else {
          return review;
        }
      });

    default:
      return state;
  }
};

export { reviewReducer };
