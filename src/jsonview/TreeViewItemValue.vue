<template>
  <div>
    <span class="item-key">{{keyString}}</span>
    <input v-if="modifiable" class="item-value" v-model="valueString" @keyup.enter="onUpdateData" @blur="onUpdateData">
  </div>
</template>


<script>
export default {
  name: "tree-view-item",
  props: ["data", "modifiable", "key-string"],
  data: function() {
    return {
      valueString: this.data && this.data.toString(),
      error: false
    };
  },
  computed: {},
  methods: {
    onUpdateData: function() {
      this.$emit("change-data", [], this.valueString);
    }
  }
};
</script>

<style>
.item-value {
  float: right;
  width: 120px;
}
</style>
