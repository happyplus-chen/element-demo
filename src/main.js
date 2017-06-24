// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'src/routers/routers'
// import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

import Vuetify from 'vuetify'
Vue.use(Vuetify)
import "vuetify/dist/vuetify.min.css"

// Vue.use(VueRouter)
// import element from "./components/element.vue"
// import Hello from "./components/Hello.vue"
// import index from "./components/index.vue"
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/element',
//       component: element
//     },
//     {
//       path: '/Hello',
//       component: Hello
//     },
//     {
//       path: '/index',
//       component: index
//     }
//   ]
// })

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})