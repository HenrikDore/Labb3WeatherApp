<template>
  <div class="about">
    <h1>Made by: Henrik Doré</h1>
    <p>{{apiInfo}}</p>
    <p>
      <a href="https://openweathermap.org/" target="_blank">Openweather</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    apiInfo() {
      return this.$store.state.apiInfo;
    }
  }
};
</script>


<style scoped>
.about {
  font-size: 30px;
  color: black;
  text-align: center;

  /*
        <p>API from: <a href="https://openweathermap.org/" target="_blank">Openweather</a></p>
 */
}
</style>