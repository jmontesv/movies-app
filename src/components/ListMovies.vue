<template>
  <div>
    <v-container class="pa-2 text-center flex-column justify-space-between">
      <v-row align="center" justify="center">
        <MovieItem
          v-for="movie in movies"
          :totalVotes="movie.vote_count"
          :voteAverage="movie.vote_average"
          :title="movie.title"
          :image="movie.poster_path"
          :key="movie.id"
        />
      </v-row>
      <v-pagination
        @input="eventInPaginator"
        v-model="page"
        :length="info.pages"
        circle
      >
      </v-pagination>
    </v-container>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
export default {
  components: {
    MovieItem,
  },
  props: {
    movies: Array,
    info: Object,
  },
  data() {
    return {
      page: this.info.currentPage,
    };
  },
  methods: {
    eventInPaginator(currentNumber) {
      this.$emit("changePaginationState", currentNumber);
    },
  },
};
</script>
