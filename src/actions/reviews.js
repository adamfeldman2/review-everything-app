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
  return dispatch => {
    database
      .ref('reviews')
      .push(review)
      .then(snapshot => {
        dispatch(
          submitReview({
            id: snapshot.key,
            ...review
          })
        );
      });
  };
};

const editReview = (id, updates) => {
  return {
    type: 'EDIT_REVIEW',
    id,
    updates
  };
};

const startEditReview = (reviewData = {}) => {
  const { id = '', title = '', date = 0, stars = 0, note = '' } = reviewData;
  const reviewId = id;
  const review = { title, date, stars, note };
  return dispatch => {
    database
      .ref(`reviews/${id}`)
      .update({
        ...review
      })
      .then(snapshot => {
        dispatch(
          editReview(id, {
            ...review
          })
        );
      });
  };
};

export { submitReview, startSubmitReview, startEditReview };
