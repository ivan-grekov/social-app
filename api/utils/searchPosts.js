const search = (data, q, keys) => {
  return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(q))
  );
};

module.exports = search;
