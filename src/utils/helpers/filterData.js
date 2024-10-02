const filterItems = (items, filters, searchByName = "") => {
  const { category = [], subcategory = [] } = filters;

  if (category.length === 0 && subcategory.length === 0 && searchByName === "") {
    return items;
  }

  const normalizedSearchByName = searchByName.toLowerCase();

  return items.filter((item) => {
    const categoryMatch =
        category.length > 0 ? category.includes(item.category) : true;
    const subcategoryMatch =
        subcategory.length > 0 ? subcategory.includes(item.subcategory) : true;

    // Use optional chaining with ?. to avoid undefined errors
    const nameMatch = searchByName.length > 3
        ? item.name?.toLowerCase().includes(normalizedSearchByName)
        : true;

    return categoryMatch && subcategoryMatch && nameMatch;
  });
};

export default filterItems;
