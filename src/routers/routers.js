import Vue from 'vue'
import VueRouter from 'vue-router'
import element from "src/components/element.vue"
import Hello from "src/components/Hello.vue"
import index from "src/components/index.vue"
import roweditcrl from "src/components/roweditcrl.vue"
import render from "src/components/render.vue"
import grid from "src/grid/grid"
import asynccomponent from 'src/asynccomponent/index'
import popedit from 'src/popedit/popedit'
import transfer from 'src/components/transfer'
import template from 'src/templates/main'
import form from 'src/components/form'
import edittable from 'src/components/edittable'
import codemirror from 'src/codemirror/code'
import menu from 'src/components/menu'
import treemain from 'src/components/treemain'
import fallmenu from 'src/components/fallmenu'
import ganttshow from 'src/components/ganttshow'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/element',
      component: element
    }, {
      path: '/Hello',
      component: Hello
    }, {
      path: '/',
      component: grid
    }, {
      path: '/test',
      component: roweditcrl
    }, {
      path: '/render',
      component: render
    }, {
      path: '/async',
      component: asynccomponent
    }, {
      path: '/popedit',
      component: popedit
    }, {
      path: '/transfer',
      component: transfer
    }, {
      path: '/template',
      component: template
    }, {
      path: '/form',
      component: form
    }, {
      path: '/edittable',
      component: edittable
    }, {
      path: '/codemirror',
      component: codemirror
    }, {
      path: '/menu',
      component: menu
    }, {
      path: '/treemain',
      component: treemain
    },
    {
      path: '/fallmenu',
      component: fallmenu
    },
    {
      path: '/ganttshow',
      component: ganttshow
    }
  ]
})

export default router
