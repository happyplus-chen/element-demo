<template>
  <codemirror v-model="csscode"></codemirror>
</template>
<script>
import codemirror from "./codemirror";
export default {
  components: {
    codemirror
  },
  data() {
    return {
      csscode: `.widget-top10 a.ellipsis {
    width: auto;
    max-width: 50%;
    display: inline-block;
    vertical-align: middle
}`
    };
  },
  mounted(){
      window.co = this
  }
};
</script>

