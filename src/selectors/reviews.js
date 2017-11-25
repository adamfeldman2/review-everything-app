const selectedReviews = (reviews, { category, searchField }) => {
  return reviews
    .filter(review => {
      const categoryMatch = review.category.toLowerCase() === category;
      const searchMatch =
        review.title.toLowerCase().includes(searchField) ||
        review.note.toLowerCase().includes(searchField);

      if (category === 'all' && !searchField) {
        return reviews;
      } else if ((category === 'all' && searchMatch) || (categoryMatch && searchMatch)) {
        return searchMatch;
      }
    })
    .sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });
};

export default selectedReviews;
