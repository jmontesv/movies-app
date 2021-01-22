<template>
  <v-app>
    <v-app-bar max-height="max-content" style="flex:none">
      <v-toolbar-title role="button" @click="$router.push('/')"
        >Movies App</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-switch
        class="mt-4"
        style="width: max-content;"
        v-model="$vuetify.theme.dark"
        inset
      >
        <template slot="label">
          <v-icon>mdi-theme-light-dark</v-icon>
        </template>
      </v-switch>
    </v-app-bar>
    <v-main style="min-height: 100vh">
      <InputSearch />
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import InputSearch from "./components/InputSearch.vue";
import $searches from "./store/Searches.js";
export default {
  name: "App",
  provide: {
    $searches,
  },
  components: {
    InputSearch,
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
