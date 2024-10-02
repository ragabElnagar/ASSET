import subcategories from "../constants/subcategory.json";

const getSubcategories = (selectedCategories) => {
  let allSubcategories = [];

  selectedCategories.forEach((category) => {
    if (subcategories[category]) {
      allSubcategories = allSubcategories.concat(subcategories[category]);
    }
  });

  return [...new Set(allSubcategories)];
};

export default getSubcategories;
