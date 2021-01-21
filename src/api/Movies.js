import { factoryFetchRequest } from "./FactoryRequests.js";

const getMovies = async (name, page = 1) => {
  const url = factoryFetchRequest.createUrl("/search/movie", "", {
    api_key: process.env.VUE_APP_API_KEY,
    page: page,
    query: name,
    include_adult: "false",
  });
  const config = factoryFetchRequest.createConfig(
    { "Content-Type": "application-json" },
    "GET"
  );
  return await factoryFetchRequest.createRequest(url, config);
};
const getMovie = async (id) => {
  const url = factoryFetchRequest.createUrl("/movie", `/${id}`, {
    api_key: process.env.VUE_APP_API_KEY,
  });
  const config = factoryFetchRequest.createConfig(
    { "Content-Type": "application-json" },
    "GET"
  );
  return await factoryFetchRequest.createRequest(url, config);
};

const getUpcoming = async (page = 1) => {
  const url = factoryFetchRequest.createUrl("/movie/upcoming", "", {
    api_key: process.env.VUE_APP_API_KEY,
    page: page,
  });
  const config = factoryFetchRequest.createConfig(
    { "Content-Type": "application-json" },
    "GET"
  );
  return await factoryFetchRequest.createRequest(url, config);
};

export { getMovies, getMovie, getUpcoming };
