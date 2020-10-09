export const request = async (url, method = 'GET', data) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': `${
          method === 'POST' || method === 'PUT' ? 'application/json' : undefined
        }`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = await response.json();
      throw new Error(error?.message ? error.message : response.statusText);
    }
  } catch (e) {
    throw e;
  }
};
