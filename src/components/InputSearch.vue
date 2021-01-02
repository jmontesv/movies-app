<template>
  <div>
    <v-container id="input-usage" fluid>
      <v-row class="flex-row justify-center">
        <v-col
          cols="12"
          md="6"
          lg="6"
          xl="4"
          class="d-flex align-center"
          height="max-content"
        >
          <v-text-field
            full-width
            v-model="nameMovie"
            autofocus
            label="Enter the name of movie"
            single-line
            solo-inverted
            hide-details="true"
            class="mr-2"
            @keyup.enter="search"
          ></v-text-field>
          <v-btn @focus="search" icon class="text-center">
            <v-icon color="black">mdi-cloud-search-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nameMovie: "",
    };
  },
  watch: {
    nameMovie(value) {
      if (value === "" && this.$route.path !== "/") this.$router.push("/");
    },
  },
  methods: {
    search() {
      this.$route.path !== "/search"
        ? this.$router.push("/search?text=" + this.nameMovie)
        : console.log(this.$router);
    },
  },
};
</script>
