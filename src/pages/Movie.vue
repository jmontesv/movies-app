<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img
          height="600px"
          :src="'https://image.tmdb.org/t/p/original' + background"
          gradient="to top, rgb(0,0,0), transparent"
        >
          <v-container style="height: 100%" class="d-flex flex-column-reverse">
            <h1 class="text-h3 font-weight-black white--text pl-6 pb-2">
              {{ title }}
            </h1>
          </v-container>
        </v-img>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="8" class="d-flex justify-center">
        <v-col cols="4">
          <v-img :src="'https://image.tmdb.org/t/p/w500' + image"></v-img>
        </v-col>
        <v-col cols="8">
          <v-row>
            <v-col cols="12">
              <div class="mb-4">
                <v-chip
                  class="mr-4"
                  v-for="{ id, name } in genres"
                  :key="id"
                  color="green"
                  outlined
                >
                  <h6 class="text-h6">{{ name }}</h6>
                </v-chip>
              </div>
              <p class="text-h5 text-justify">
                {{ overview }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { getMovie } from "../api/Index";
export default {
  name: "movie",
  data() {
    return {
      id: null,
      title: "",
      image: "",
      overview: "",
      background: "",
      genres: [],
    };
  },
  mounted() {
    getMovie(this.$route.params.id)
      .then((movieDetail) => {
        console.log(movieDetail);
        const {
          id,
          title,
          poster_path,
          overview,
          backdrop_path,
          genres,
        } = movieDetail;
        this.id = id;
        this.title = title;
        this.image = poster_path;
        this.overview = overview;
        this.background = backdrop_path;
        this.genres = genres;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
