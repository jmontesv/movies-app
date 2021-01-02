<template>
  <div>
    <h1>Upcoming Movies</h1>
    <v-slide-group
      eleva
      v-if="movies.length > 0"
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item v-for="movie in movies" :key="movie.id">
        <MovieItem
          :height="'350px'"
          :width="'200px'"
          :totalVotes="movie.vote_count"
          :voteAverage="movie.vote_average"
          :title="movie.title"
          :id="movie.id"
          :image="
            $checkForPicture(
              movie.poster_path,
              'https://image.tmdb.org/t/p/w300'
            )
          "
          :key="movie.id"
        />
      </v-slide-item>
    </v-slide-group>
  </div>
</template>
<script>
import MovieItem from "../components/MovieItem.vue";
import { getUpcoming } from "../api/Index.js";
export default {
  data() {
    return {
      model: null,
      movies: [],
    };
  },
  components: {
    MovieItem,
  },
  mounted() {
    getUpcoming().then((upcomingMovies) => {
      this.movies = [...upcomingMovies.results];
    });
  },
};
</script>
