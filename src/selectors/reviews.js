const selectedReviews = (reviews, { category }) => {
  return reviews.filter(review => {
    if (category === 'all') {
      return reviews;
    } else {
      return review.category.toLowerCase() === category;
    }
  });
};

export default selectedReviews;
