<template>
  <ListMovies
    @changePaginationState="getMoviesByName($route.query.text, $event)"
    :movies="movies"
    :info="info"
  />
</template>
<script>
import ListMovies from "../components/ListMovies.vue";
import { getMovies } from "../api/Index.js";
export default {
  name: "Search",
  data() {
    return {
      movies: [],
      info: {},
    };
  },
  components: {
    ListMovies,
  },
  methods: {
    getMoviesByName(name, page = 1) {
      getMovies(name, page)
        .then((moviesFounded) => {
          this.movies = [...moviesFounded.results];
          this.info["totalResults"] = moviesFounded.total_results;
          this.info["currentPage"] = moviesFounded.page;
          this.info["pages"] = moviesFounded.total_pages;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getMoviesByName(this.$route.query.text);
  },
};
</script>
