const queryString = (search) => {
  const query = {};

  if (!search) return query;

  const queryStr = search.slice(1);
  const queryArr = queryStr.split('&');
  queryArr.forEach((item) => {
    if (item.includes('=')) {
      const [key, value] = item.split('=');
      query[key] = value;
    }
  });

  return query;
};

export default queryString;
