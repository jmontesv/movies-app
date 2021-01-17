import { factoryFetchRequest } from "./FactoryRequests.js";

export const getMovies = async (name, page = 1) => {
  return await factoryFetchRequest.createRequest(
    "/search/movie",
    "",
    `api_key=${process.env.VUE_APP_API_KEY}&query=${name}&page=${page}&include_adult=false`
  );
};
export const getMovie = async (id) => {
  return await factoryFetchRequest.createRequest(
    "/movie",
    `/${id}`,
    `api_key=${process.env.VUE_APP_API_KEY}`
  );
};
export const getUpcoming = async (page = 1) => {
  return await factoryFetchRequest.createRequest(
    "/movie/upcoming",
    "",
    `api_key=${process.env.VUE_APP_API_KEY}&page=${page}`
  );
};
