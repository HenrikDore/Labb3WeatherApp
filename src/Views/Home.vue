<template>
  <div id="Home">
    <div class="search-box">
      <input
        type="text"
        class="search-bar"
        placeholder="Sök efter en stad.."
        v-model="cityName"
        @keypress="getWeather"
      />
    </div>
    <div class="weather-wrap">
      <div class="location-box">
        <div class="location">{{ this.weather[0].name }}</div>
      </div>

      <div class="weather-box">
        <div class="temp" v-if="!isNaN(this.weather[0].temp)">{{Math.round(this.weather[0].temp)}}°C</div>
        <div class="weather">{{this.weather[0].description}}</div>
        <div class="feels-like" v-if="!isNaN(this.weather[0].feels_like)">
          <p>Feels like: {{Math.round(this.weather[0].feels_like)}}°c</p>
        </div>
      </div>
    </div>
    <div class="searched-cities">
      <h3>Searched Cities: {{this.$store.state.lastSearch}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      api_key: "31f8d73de6e893d2411c1a8b626497f4",
      url_base: "https://api.openweathermap.org/data/2.5/",
      cityName: "",

      weather: [
        { name: null },
        { country: null },
        { main: null },
        { description: null },
        { temp: null },
        { feels_like: null },
        { humidity: null },
        { pressure: null }
      ]
    };
  },

  methods: {
    getWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.cityName}&units=metric&APPID=${this.api_key}`
        )
          .then(response => response.json())
          .then(result => {
            this.weather[0].name = result.name;
            this.weather[0].country = result.sys.country;
            this.weather[0].main = result.weather[0].main;
            this.weather[0].description = result.weather[0].description;
            this.weather[0].temp = result.main.temp;
            this.weather[0].feels_like = result.main.feels_like;
            this.weather[0].humidity = result.main.humidity;
            this.weather[0].pressure = result.main.pressure;

            this.$store.commit("SET_LAST_SEARCH", this.cityName);
          });
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: grey;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}

.nav_link {
  margin-right: 15px;
}

.search-box {
  width: 100%;
  margin-bottom: 15px;
  padding: 35px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  text-align: center;
}

.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin: 15px;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 10px;
  color: #fff;
  font-size: 70px;
}
.weather-box .weather {
  color: #fff;
  font-size: 30px;
}

.weather-box .feels-like {
  color: #fff;
  font-size: 25px;
  padding: 20px;
  margin-left: 10px;
}
</style>
