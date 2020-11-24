<template>
  <div>
    <InputSearch @nameToSearch="handleName" />
    <p v-if="movies.length <= 0">Cargando...</p>
    <ListMovies
      v-else
      @changePaginationState="getMoviesByName(nameToSearch, $event)"
      :movies="movies"
      :info="info"
    />
  </div>
</template>

<script>
import { getMovies } from "../api/Index";
import ListMovies from "../components/ListMovies.vue";
import InputSearch from "../components/InputSearch.vue";
export default {
  data() {
    return {
      nameToSearch: "",
      movies: [],
      info: {},
    };
  },
  components: {
    ListMovies,
    InputSearch,
  },
  methods: {
    getMoviesByName(name, page = 1) {
      getMovies(name, page)
        .then((moviesFounded) => {
          this.movies = [...moviesFounded.results];
          this.info["totalResults"] = moviesFounded.total_results;
          this.info["currentPage"] = moviesFounded.page;
          this.info["pages"] = moviesFounded.total_pages;
          console.log(moviesFounded);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleName(name) {
      this.nameToSearch = name;
      this.getMoviesByName(name);
    },
  },
};
</script>

<style scoped></style>
