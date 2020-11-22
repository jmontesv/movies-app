<template>
  <div>
    <v-container class="pa-2 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <MovieItem
          v-for="movie in movies"
          :totalVotes="movie.vote_count"
          :voteAverage="movie.vote_average"
          :title="movie.title"
          :image="movie.poster_path"
          :key="movie.id"
        />
      </v-row>
    </v-container>
    <v-pagination v-model="page" :length="info.pages" circle> </v-pagination>
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
};
</script>

<style scoped></style>
