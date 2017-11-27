import database from '../firebase/firebase';

const submitReview = review => {
  return {
    type: 'SUBMIT_REVIEW',
    review
  };
};

const startSubmitReview = (reviewData = {}) => {
  const { title = '', date = 0, category = '', stars = 0, note = '' } = reviewData;
  const review = { title, date, category, stars, note };
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    database
      .ref(`users/${uid}/reviews`)
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
  const { id = '', title = '', date = 0, category = '', stars = 0, note = '' } = reviewData;
  const review = { title, date, category, stars, note };
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    database
      .ref(`users/${uid}/reviews/${id}`)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    database
      .ref(`users/${uid}/reviews/${id}`)
      .remove()
      .then(() => {
        dispatch(removeReview({ id }));
      });
  };
};

const fetchReviews = reviewsArr => {
  return {
    type: 'FETCH_REVIEWS',
    reviewsArr
  };
};

const startFetchReviews = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const reviewsArr = [];

    database
      .ref(`users/${uid}/reviews`)
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          reviewsArr.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        dispatch(fetchReviews(reviewsArr));
      });
  };
};

export { submitReview, startSubmitReview, startEditReview, startRemoveReview, startFetchReviews };
