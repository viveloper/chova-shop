export const request = async (url, method = 'GET', data) => {
  try {
    const response = await fetch(url, {
      method,
      headers: { Accept: 'application/json' },
      body: JSON.stringify(data),
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
