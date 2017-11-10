const submitReview = (review = {}) => {
  return {
    type: 'SUBMIT_REVIEW',
    review
  };
};

export { submitReview };
