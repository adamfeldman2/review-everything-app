import database from '../firebase/firebase';

const submitReview = review => {
  return {
    type: 'SUBMIT_REVIEW',
    review
  };
};

const startSubmitReview = (reviewData = {}) => {
  const { title = '', date = 0, stars = 0, note = '' } = reviewData;
  const review = { title, date, stars, note };
  return dispatch => {};
};

export { submitReview, startSubmitReview };
