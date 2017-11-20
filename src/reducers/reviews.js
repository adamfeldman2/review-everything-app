const reviewsReducer = (state = [], action) => {
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

    case 'REMOVE_REVIEW':
      return state.filter(review => {
        return action.id !== review.id;
      });

    case 'FETCH_REVIEWS':
      return action.reviewsArr;

    default:
      return state;
  }
};

export default reviewsReducer;
