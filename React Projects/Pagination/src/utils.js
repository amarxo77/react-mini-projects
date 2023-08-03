const paginate = (followers) => {
  const splitArrays = [];
  for (let i = 0; i < followers.length; i += 10) {
    splitArrays.push(followers.slice(i, i + 10));
  }
  return splitArrays;
};

export default paginate;
