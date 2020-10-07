const API_ENDPOINT = 'http://localhost:5000/api';

const request = async (url) => {
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (e) {
    throw e;
  }
};

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
