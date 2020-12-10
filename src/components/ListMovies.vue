<template>
  <div>
    <v-container fluid class="pa-2 d-flex flex-column justify-space-between">
      <v-row class="d-flex flex-row justify-center mb-12">
        <MovieItem
          v-for="movie in movies"
          :totalVotes="movie.vote_count"
          :voteAverage="movie.vote_average"
          :title="movie.title"
          :id="movie.id"
          :image="checkForPicture(movie.poster_path)"
          :key="movie.id"
        />
      </v-row>
      <v-pagination
        @input="eventInPaginator"
        v-model="page"
        :length="info.pages"
        circle
        color="black"
      >
      </v-pagination>
    </v-container>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
import defaultImage from "../assets/img/default_image_movie.jpg";
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
      page: null,
    };
  },
  methods: {
    eventInPaginator(currentNumber) {
      this.scrollTop();
      this.$emit("changePaginationState", currentNumber);
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    checkForPicture(remoteImage) {
      return remoteImage != null
        ? "https://image.tmdb.org/t/p/w300" + remoteImage
        : defaultImage;
    },
  },
  mounted() {
    this.page = this.info.currentPage;
  },
  updated() {
    this.page = this.info.currentPage;
  },
};
</script>
