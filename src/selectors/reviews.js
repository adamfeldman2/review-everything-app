const selectedReviews = (reviews, { category }) => {
  return reviews
    .filter(review => {
      if (category === 'all') {
        return reviews;
      } else {
        return review.category.toLowerCase() === category;
      }
    })
    .sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });
};

export default selectedReviews;
