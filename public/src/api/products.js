const API_ENDPOINT = 'http://localhost:9000/api/v1';

const request = async (url) => {
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

export const fetchProducts = async () => {
  try {
    const result = await request(`${API_ENDPOINT}/product`);
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
