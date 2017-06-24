<template>
  <div>
    <el-input v-model="value1"></el-input>
    <el-input v-demo="value1"
              v-model="value2"></el-input>
    <el-input v-demo="value2"
              v-model="value3"></el-input>
  </div>
</template>

<script>
import Vue from "vue"
Vue.directive('demo', {
  bind: function (el, binding, vnode) {

    let vm = vnode.componentInstance.$parent;
    debugger
    console.log(vm)
    vm.$watch(binding.expression, (val, oldval) => {
      debugger
      console.log(val, oldval);
      //binding.set('xxx')
    })
  },
  // componentUpdated: function (el, binding, vnode, oldVnode) {
  //   let val = vnode.componentInstance.value;
  //   let old = oldVnode.componentInstance.value;
  //   debugger
  //   if (val === old) {
  //     console.log("old value : " + old, +"new value : " + val);
  //   }
  // }
})
export default {
  data() {
    return {
      message: "hello",
      show: true,
      value1: "valuea",
      value2: 'valueb',
      value3: 'valuec'

    }
  },
  props: {
  },
  methods: {
    edit() {
      this.show = false
    },
    accept() {
      this.show = true
    },
    cancel() {
      this.show = true
    },
  }
}
</script>

