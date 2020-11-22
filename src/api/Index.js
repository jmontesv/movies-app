export const getMovies = (name, page = 1) => {
  return fetch(
    `${process.env.VUE_APP_API_URL}/search/movie?api_key=${process.env.VUE_APP_API_KEY}&query=${name}&page=${page}&include_adult=false`
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};
