<template>
  <div>
   <li v-for="name in Object.keys(model)" :key="name">
       <div><span>{{name}}</span>-----<span>{{model[name]}}</span></div>
   </li>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    model: Object
  },
  data: function() {
    return {
      open: false,
      sss: Object.keys(this.model)
    };
  },
  computed: {
    isFolder: function() {
      return Object.keys(this.model).length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    changeType: function() {
      if (!this.isFolder) {
        Vue.set(this.model, "children", []);
        this.addChild();
        this.open = true;
      }
    }
  }
};
</script>

<style>
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
