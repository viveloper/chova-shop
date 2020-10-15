import { API_ENDPOINT } from '../config.js';
import { request } from './request.js';

export const fetchProducts = async () => {
  try {
    const result = await request(`${API_ENDPOINT}/products`);
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
      `${API_ENDPOINT}/products/${id}`,
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