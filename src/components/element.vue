<template>
  <div>
    {{msg}}</div>
</template>
  <script>
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(1) }, 10000)
  })
  export default {
    data() {
      return {
        msg: "1111111"
      }
    },
    methods: {
      render() {
        return "111111"
      },
      async() {

      }
    },
    beforeCreate() {
      debugger;
      console.log('beforeCreate')
    },
    created() { 
      debugger;
      console.log('created') },
    beforeMount() {
      debugger;
      console.log('beforeMount');
      new Promise((resolve, reject) => {
    setTimeout(() => { resolve(1) }, 10000)
  }).then((a) => {
        console.log(a)
      })
    },
    mounted() {
      debugger;
      console.log('mounted')
      this.msg = "2222"
    }
    ,
    beforeUpdate() { console.log('beforeupdated') },
    updated() { console.log('updated') },
    activated() { console.log('activated') },
    deactivated() { console.log('deactivated') },
    beforeDestory() { console.log('beforeDestory') },
    destoryed() { console.log('destoryed') }
  }
  </script>
  