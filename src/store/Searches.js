import Vue from "vue";

const $searches = Vue.observable({
  lastMovieSearch: {
    text: "",
    page: null,
  },
});

export default $searches;
