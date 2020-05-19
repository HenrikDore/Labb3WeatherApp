<template>
  <div id="app">
    <Headline headline="WeatherApp"></Headline>
    <div class="nav">
      <router-link to="/" class="nav_link">HOME</router-link>
      <router-link to="/about" class="nav_link">ABOUT</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Headline from "@/Views/Headline.vue";

export default {
  name: "app",
  components: {
    Headline
  }
};
</script>
