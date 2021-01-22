<template>
  <div>
    <template v-if="!loading">
      <ListMovies
        v-if="movies.length > 0"
        @changePaginationState="changePaginationMovies($event)"
        :movies="movies"
        :info="info"
      />
      <h3 class="text-center" v-else>Those movie don`t exists</h3>
    </template>
    <div class="text-center" v-else>
      <v-progress-circular
        indeterminate
        color="grey darken-1"
      ></v-progress-circular>
    </div>
  </div>
</template>
<script>
import ListMovies from "../components/ListMovies.vue";
import { getMovies } from "../api/Movies.js";
import { updateLastMovieSearch } from "../store/Searches.js";
export default {
  name: "Search",
  inject: ["$searches"],
  data() {
    return {
      loading: true,
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
          updateLastMovieSearch({
            text: this.info["textToSearch"],
            page: this.info.currentPage,
          });
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
    changePaginationMovies(currentPage) {
      this.getMoviesByName(this.info["textToSearch"], currentPage);
    },
  },
  mounted() {
    if (this.$searches.lastMovieSearch["text"] === "") {
      this.info["textToSearch"] = this.$route.query.text;
      this.getMoviesByName(this.info["textToSearch"]);
      return;
    }
    this.info["textToSearch"] = this.$searches.lastMovieSearch["text"];
    this.getMoviesByName(
      this.info["textToSearch"],
      this.$searches.lastMovieSearch["page"]
    );
  },
  watch: {
    "$route.query.text": function(text) {
      this.info["textToSearch"] = text;
      this.getMoviesByName(text);
    },
  },
};
</script>
