<template>
  <v-col>
    <v-hover v-slot="{ hover }">
      <v-card
        max-width="300px"
        max-height="450px"
        style="cursor: pointer, width: 300px"
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
      >
        <v-img :src="image" height="450px" width="300px">
          <v-row style="height: 100%">
            <v-col class="d-flex flex-column-reverse justify-space-between">
              <!-- <v-card-title class="title white--text">
                <p class="ml-2 subheading text-left">
                  {{ title }}
                </p>
                 <div class="align-self-center">
                <v-btn
                  v-for="(icon, index) in icons"
                  :key="index"
                  :class="{ 'show-btns': hover }"
                  color="transparent"
                  icon
                >
                  <v-icon :class="{ 'show-btns': hover }" color="transparent">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </div> 
              </v-card-title> -->

              <v-rating
                class="text-right"
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                small
                readonly
                ><p>({{ totalVotes }})</p></v-rating
              >
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
      </v-card>
    </v-hover>
  </v-col>
</template>
<script>
export default {
  props: {
    voteAverage: Number,
    title: String,
    image: String,
    totalVotes: Number,
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
