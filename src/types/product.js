/**
 * Represents a product.
 * @typedef {Object} Product
 * @property {number} id - The product ID.
 * @property {string} title - The product title.
 * @property {string} description - The product description.
 * @property {number} price - The product price.
 * @property {number} discountPercentage - The discount percentage.
 * @property {number} rating - The product rating.
 * @property {number} stock - The stock count.
 * @property {string} brand - The brand name.
 * @property {string} category - The category name.
 * @property {string} thumbnail - The product thumbnail URL.
 * @property {string[]} images - An array of image URLs.
 */

/**
 * Represents the response for a list of products.
 * @typedef {Object} ProductsResponse
 * @property {Product[]} products - An array of products.
 * @property {number} total - The total number of products.
 * @property {number} skip - The number of products skipped.
 * @property {number} limit - The limit of products per response.
 */
