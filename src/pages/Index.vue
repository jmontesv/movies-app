<template>
  <ListMovies :movies="movies" :info="info" />
</template>

<script>
import { getMovies } from "../api/Index";
import ListMovies from "../components/ListMovies.vue";
export default {
  data() {
    return {
      movies: [],
      info: {},
    };
  },
  components: {
    ListMovies,
  },
  mounted() {
    getMovies("batman")
      .then((moviesFounded) => {
        this.movies = [...moviesFounded.results];
        this.info["totalResults"] = moviesFounded.total_results;
        this.info["currentPage"] = moviesFounded.page;
        this.info["pages"] = moviesFounded.total_pages;
        console.log(this.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped></style>
