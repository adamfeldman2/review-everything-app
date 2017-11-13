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
  const review = { title, date, stars, note };
  return dispatch => {
    database
      .ref(`reviews/${id}`)
      .update({
        ...review
      })
      .then(() => {
        dispatch(
          editReview(id, {
            ...review
          })
        );
      });
  };
};

const removeReview = ({ id }) => {
  return {
    type: 'REMOVE_REVIEW',
    id
  };
};

const startRemoveReview = id => {
  return dispatch => {
    database
      .ref(`reviews/${id}`)
      .remove()
      .then(() => {
        dispatch(
          removeReview({
            id
          })
        );
      });
  };
};

export { submitReview, startSubmitReview, startEditReview, startRemoveReview };
