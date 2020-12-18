<template>
  <v-app>
    <v-container>
      <v-row class="d-flex">
        <v-col cols="12">
          <v-switch
            class="pr-4"
            style="width: max-content; margin-left: auto"
            v-model="$vuetify.theme.dark"
            inset
          >
            <template slot="label">
              <v-icon>mdi-theme-light-dark</v-icon>
            </template>
          </v-switch>
        </v-col>
      </v-row>
    </v-container>
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
