
function getSortedProducts(type, products) {
  if (type === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => parseInt(a.price,10) - parseInt(b.price,10));
  }

  if (type === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => parseInt(b.price,10) - parseInt(a.price,10));
  }

  return products;
}

function filterProductsWithThisCategory(category, categoryName, products) {
  return category
    ? products.filter((product) => product.categoryName === categoryName)
    : [];
}

function getProductsWithThisCategory(
  categoryIntelligence,
  categorySocialSkills,
  categoryStrength,
  products
) {
  if (categoryIntelligence || categorySocialSkills || categoryStrength) {
    const intelligenceProducts = filterProductsWithThisCategory(
      categoryIntelligence,
      "intelligence",
      products
    );

    const socialSkillsProducts = filterProductsWithThisCategory(
      categorySocialSkills,
      "social skills",
      products
    );

    const strengthProducts = filterProductsWithThisCategory(
      categoryStrength,
      "strength",
      products
    );

    return [
      ...intelligenceProducts,
      ...socialSkillsProducts,
      ...strengthProducts,
    ];
  }

  return products;
}

function getProductsWithThisRating(rating, products) {
  return rating
    ? products.filter((product) => parseInt(product.rating, 10) >= rating)
    : products;
}

function getFilteredProducts(products, productsState) {
  const {
    sortby,
    categoryIntelligence,
    categorySocialSkills,
    categoryStrength,
    rating,
  } = productsState;

  const sortedProducts = getSortedProducts(sortby, products);
  const categorizedProducts = getProductsWithThisCategory(
    categoryIntelligence,
    categorySocialSkills,
    categoryStrength,
    sortedProducts
  );
  const ratedProduts = getProductsWithThisRating(rating, categorizedProducts);
  return ratedProduts;
}

export { getFilteredProducts };
