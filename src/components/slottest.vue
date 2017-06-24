<template>
  <div>
    <el-button @click="test()">{{msg}}</el-button>
    <h4>{{one}}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello vue",
      articles: []
    }
  },
  props:{
      one:{
          type:String,default:"default str"
      }
  },
  methods: {
    test() {
      console.log("in slot")
    }
  }
}
</script>