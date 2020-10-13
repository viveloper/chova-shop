import { API_ENDPOINT } from '../config.js';
import { request } from './request.js';

export const createOrder = async (token, order) => {
  try {
    const result = await request(
      `${API_ENDPOINT}/orders`, 
      'POST', 
      order,
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