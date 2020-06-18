import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import store from './store'

import Home from './Views/Home'
import About from './Views/About'

Vue.use(VueRouter)

Vue.config.productionTip = false

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
  store // <--
}).$mount('#app')
