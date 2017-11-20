const categoryFilter = category => {
  return {
    type: 'CATEGORY_FILTER',
    category: category.toLowerCase()
  };
};

export { categoryFilter };
