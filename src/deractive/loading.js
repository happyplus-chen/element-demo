import Vue from 'vue'
import loading from '../components/myspin'

const Mask = Vue.extend(Loading)

const install = function (Vue) {
    Vue.directive('loading', {
        bind: function (el, binding, vnode) {

         },
        update: function (el, binding) { },
        unbind: function (el, binding) { }
    })
}