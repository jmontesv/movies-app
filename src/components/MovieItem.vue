<template>
  <router-link style="text-decoration: none" :to="'/movies/' + id">
    <v-img :src="image" :height="height" :width="width">
      <v-row style="height: 100%">
        <v-col class="d-flex flex-column-reverse justify-space-between">
          <v-rating
            class="text-right"
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            small
            readonly
          ></v-rating>
        </v-col>
      </v-row>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey darken-1"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </router-link>
</template>
<script>
export default {
  props: {
    id: Number,
    voteAverage: Number,
    title: String,
    image: String,
    totalVotes: Number,
    height: String,
    width: String,
  },
  computed: {
    rating() {
      return this.voteAverage / 2;
    },
  },
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>
