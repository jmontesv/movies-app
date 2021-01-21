<template>
  <v-container>
    <v-row>
      <v-col>
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
            <v-col>
              <v-hover v-slot="{ hover }">
                <v-card
                  max-width="200px"
                  max-height="350px"
                  style="cursor: pointer"
                  :elevation="hover ? 24 : 2"
                  :class="{ 'on-hover': hover }"
                >
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
                </v-card>
              </v-hover>
            </v-col>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MovieItem from "../components/MovieItem.vue";
import { getUpcoming } from "../api/Movies.js";
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
<style scoped>
.v-card.on-hover {
  box-shadow: none !important;
  transition: opacity 0.4s;
}
.v-card:not(.on-hover) {
  opacity: 0.8;
}
</style>
