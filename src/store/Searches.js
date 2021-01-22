import Vue from "vue";

const $searches = Vue.observable({
  lastMovieSearch: {
    text: "",
    page: null,
  },
});
const updateLastMovieSearch = (movieSearch) => {
  $searches.lastMovieSearch = movieSearch;
};

export { updateLastMovieSearch };
export default $searches;
