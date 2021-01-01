import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index.vue";
import Movie from "../pages/Movie.vue";

Vue.use(VueRouter);
// Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
const routes = [
  { path: "/", component: Index },
  { path: "/movies/:id", component: Movie },
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here
const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
});
export default router;
