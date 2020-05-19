import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import About from '@/Views/About.vue'
import Home from '@/Views/Home.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false


const store = new Vuex.Store({

  state: {
    apiInfo: 'weatherAPI used: '
  }



})

const router = new VueRouter({
  routes: [{
    component: About,
    path: '/about'
  }, {
    component: Home,
    path: '/'
  }
  ]
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
