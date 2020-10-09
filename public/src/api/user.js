import { API_ENDPOINT } from '../config.js';
import { request } from './request.js';

export const login = async ({ email, password }) => {
  try {
    const result = await request(`${API_ENDPOINT}/users/login`, 'POST', {
      email,
      password,
    });
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
