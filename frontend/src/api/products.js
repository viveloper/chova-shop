import { request } from './request.js';

export const fetchProducts = async (keyword = '', pageNumber = '') => {
  try {
    const result = await request(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
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
    const result = await request(`/api/products/${id}`);
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
      `/api/products/${id}`,
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
      `/api/products/${product.id}`,
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
      `/api/products`,
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
      `/api/products/${productId}/reviews`,
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