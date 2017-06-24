import Vue from 'vue'
import VueRouter from 'vue-router'
import element from "src/components/element.vue"
import Hello from "src/components/Hello.vue"
import index from "src/components/index.vue"
import roweditcrl from "src/components/roweditcrl.vue"
import render from "src/components/render.vue"
import grid from "src/grid/grid"
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/element',
      component: element
    },
    {
      path: '/Hello',
      component: Hello
    },
    {
      path: '/',
      component: grid
    },
    {
      path: '/test',
      component: roweditcrl
    },
    {
      path: '/render',
      component: render
    }
  ]
})

export default router