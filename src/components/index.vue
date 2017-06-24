<template>
  <div>
    <el-button @click="create()">button</el-button>
  <div class='editor'></div>
  <melement my-msg="123"
            ref="elm"></melement>
  <!--<quill-editor></quill-editor>-->
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import Vue from 'vue'
import melement from 'src/components/element'
Vue.component('melement', melement)
export default {
  components: { quillEditor },
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: [],
    }
  },
  mounted: function () {
    console.log(11)
    window.Vue = this
  },
  methods: {
    create() {
      window.open('./element?' + this.author)
    }
  },
  mounted() {
    let editor = new Quill('.editor');
  }
}
</script>
