import { API_ENDPOINT } from '../config.js';

export const uploadImage = async (file, token) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch(`${API_ENDPOINT}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });
    if (response.ok) {
      const data = await response.text();
      return {
        isError: false,
        data,
      };
    } else {
      const error = await response.json();
      return {
        isError: true,
        data: new Error(error?.message ? error.message : response.statusText),
      }
    }
  } catch (e) {
    return {
      isError: true,
      data: e,
    }
  }
};