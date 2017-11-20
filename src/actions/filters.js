const categoryFilter = category => {
  return {
    type: 'CATEGORY_FILTER',
    category
  };
};

export { categoryFilter };
