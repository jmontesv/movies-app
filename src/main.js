import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import defaultImage from "./assets/img/default_image_movie.jpg";

Vue.config.productionTip = false;
Vue.prototype.$checkForPicture = function(remoteImage, endpoint) {
  return remoteImage != null ? endpoint + remoteImage : defaultImage;
};
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
