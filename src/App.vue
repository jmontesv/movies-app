<template>
  <v-app>
    <v-app-bar max-height="max-content" style="flex:none">
      <v-toolbar-title role="button" @click="$router.push('/')"
        >Movies App</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-switch
        class="pr-4 mt-4"
        style="width: max-content;"
        v-model="$vuetify.theme.dark"
        inset
      >
        <template slot="label">
          <v-icon>mdi-theme-light-dark</v-icon>
        </template>
      </v-switch>
    </v-app-bar>
    <v-main>
      <v-container>
        <transition name="fade" mode="out-in">
          <keep-alive include="index">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
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
