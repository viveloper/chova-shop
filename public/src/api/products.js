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
