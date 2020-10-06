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
      throw new Error('Network response was not ok.');
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
