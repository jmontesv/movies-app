<template>
  <v-container v-if="!loading" fluid>
    <v-row>
      <v-col cols="12">
        <v-img
          height="600px"
          @load="backgroundImageLoaded = true"
          :src="
            this.$checkForPicture(
              background,
              'https://image.tmdb.org/t/p/original'
            )
          "
          :gradient="gradient"
        >
          <v-container style="height: 100%" class="d-flex flex-column-reverse">
            <h1 class="text-h3 font-weight-black white--text pl-6 pb-2">
              {{ title }}
            </h1>
          </v-container>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey darken-1"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="12" lg="8" class="d-flex flex-wrap justify-center">
        <v-col cols="12" sm="4" md="4">
          <v-img
            :src="
              this.$checkForPicture(image, 'https://image.tmdb.org/t/p/w500')
            "
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey darken-1"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col cols="12" sm="8" md="8">
          <v-row>
            <v-col cols="12">
              <div class="mb-4">
                <v-chip
                  class="mr-4 mb-4"
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
  <div v-else class="d-flex justify-center align-center" style="height: 100%">
    <v-progress-circular
      :size="50"
      color="grey darken-1"
      indeterminate
    ></v-progress-circular>
  </div>
</template>
<script>
import { getMovie } from "../api/Movies";
export default {
  name: "movie",
  data() {
    return {
      backgroundImageLoaded: false,
      loading: true,
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
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    gradient() {
      return this.backgroundImageLoaded
        ? "to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.8) 45%, transparent"
        : undefined;
    },
  },
};
</script>
