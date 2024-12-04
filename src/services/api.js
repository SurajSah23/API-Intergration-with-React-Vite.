const BASE_URL = 'https://dummyjson.com';

/**
 * Fetch all products with optional limit and skip parameters.
 * @param {number} [limit=30] - The maximum number of products to fetch.
 * @param {number} [skip=0] - The number of products to skip.
 * @returns {Promise<Object>} - The response data in JSON format.
 */
export async function getAllProducts(limit = 30, skip = 0) {
  const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
  return response.json();
}

/**
 * Fetch a single product by ID.
 * @param {number} id - The ID of the product to fetch.
 * @returns {Promise<Object>} - The product data in JSON format.
 */
export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return response.json();
}

/**
 * Search for products based on a query string.
 * @param {string} query - The search query.
 * @returns {Promise<Object>} - The search results in JSON format.
 */
export async function searchProducts(query) {
  const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
  return response.json();
}

/**
 * Fetch all product categories.
 * @returns {Promise<Object>} - The list of categories in JSON format.
 */
export async function getCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`);
  return response.json();
}
