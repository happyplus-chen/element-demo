<template>
<div class="box">
  <tree-view :data="sampleData" :options="{modifiable: true}" @change-data="onChangeData"></tree-view>
</div>
</template>
<script>
import Vue from "vue";
import TreeView from "../jsonview";
Vue.use(TreeView);
export default {
  data() {
    return {
      sampleData: {
        input: {
          "font-family": "monaco, monospace;",
          "font-size": "14px;",
          "margin-left": "18px;",
          ".tree-view-item": {
            "font-family": "monaco, monospace;",
            "font-size": "14px;",
            "margin-left": "18px;"
          },

          ".tree-view-item-node": {
            cursor: "pointer;",
            position: "relative;",
            "white-space": "nowrap;"
          },

          ".tree-view-item-leaf": {
            boder: {
              color: "red",
              size: "1em"
            }
          }
        }
      }
    };
  },
  methods: {
    onChangeData: function(data) {
      console.log(JSON.stringify(data));
    }
  }
};
</script>

<style>
.box {
  width: 400px;
  height: 400px;
  border: solid 1px;
  overflow-y: auto;
}
</style>
