import { API_ENDPOINT } from '../config.js';
import { request } from './request.js';

export const fetchProducts = async (keyword = '', pageNumber = '1') => {
  try {
    const result = await request(`${API_ENDPOINT}/products?keyword=${keyword}&pageNumber=${pageNumber}`);
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const fetchProduct = async (id) => {
  try {
    const result = await request(`${API_ENDPOINT}/products/${id}`);
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const deleteProduct = async (token, { id }) => {
  try {
    const result = await request(
      `${API_ENDPOINT}/products/${id}`,
      'DELETE', 
      null,
      token
    );
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const updateProduct = async (token, product) => {
  try {
    const result = await request(
      `${API_ENDPOINT}/products/${product.id}`,
      'PUT', 
      product,
      token
    );
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const createProduct = async (token, product) => {
  try {
    const result = await request(
      `${API_ENDPOINT}/products`,
      'POST', 
      product,
      token
    );
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const createProductReview = async (token, { productId, review }) => {
  try {
    const result = await request(
      `${API_ENDPOINT}/products/${productId}/reviews`,
      'POST', 
      review,
      token
    );
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
}