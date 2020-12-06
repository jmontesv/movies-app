<template>
  <div>
    <v-app>
      <v-main>
        <transition name="fade" mode="out-in">
          <keep-alive include="index">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </v-main>
    </v-app>
  </div>
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
