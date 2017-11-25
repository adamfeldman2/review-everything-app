const categoryFilter = category => {
  return {
    type: 'CATEGORY_FILTER',
    category: category.toLowerCase()
  };
};

const search = searchField => {
  return {
    type: 'SEARCH',
    searchField
  };
};

export { categoryFilter, search };
