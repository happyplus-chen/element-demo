<template>
  <div class="tree-view-wrapper">
    <tree-view-item class="tree-view-item-root" :data="parsedData" :max-depth="allOptions.maxDepth" :current-depth="0" :modifiable="allOptions.modifiable" @change-data="onChangeData"></tree-view-item>
  </div>
</template>

<script>
import _ from "lodash";
import TreeViewItem from "./TreeViewItem.vue";

export default {
  components: {
    TreeViewItem
  },
  name: "tree-view",
  props: ["data", "options"],
  methods: {
    transformValue: function(valueToTransform, keyForValue) {
      return {
        key: keyForValue,
        type: "value",
        value: valueToTransform
      };
    },

    generateChildrenFromCollection: function(collection) {
      return _.map(collection, (value, keyOrIndex) => {
        if (this.isObject(value)) {
          return this.transformObject(value, keyOrIndex);
        }
        if (this.isArray(value)) {
          return this.transformArray(value, keyOrIndex);
        }
        if (this.isValue(value)) {
          return this.transformValue(value, keyOrIndex);
        }
      });
    },

    transformArray: function(arrayToTransform, keyForArray) {
      return {
        key: keyForArray,
        type: "array",
        children: this.generateChildrenFromCollection(arrayToTransform)
      };
    },

    transformObject: function(
      objectToTransform,
      keyForObject,
      isRootObject = false
    ) {
      return {
        key: keyForObject,
        type: "object",
        isRoot: isRootObject,
        children: this.generateChildrenFromCollection(objectToTransform)
      };
    },

    isObject: function(value) {
      return _.isPlainObject(value);
    },

    isArray: function(value) {
      return _.isArray(value);
    },

    isValue: function(value) {
      return !this.isObject(value) && !this.isArray(value);
    },

    onChangeData: function(path, value) {
      let lastKey = _.last(path);
      path = _.dropRight(_.drop(path));

      let data = _.cloneDeep(this.data);
      let targetObject = data;
      _.forEach(path, key => {
        targetObject = targetObject[key];
      });

      if (targetObject[lastKey] != value) {
        targetObject[lastKey] = value;
        this.$emit("change-data", data);
      }
    }
  },
  computed: {
    allOptions: function() {
      return _.extend(
        {},
        {
          rootObjectKey: "root",
          maxDepth: 4,
          modifiable: false
        },
        this.options || {}
      );
    },
    parsedData: function() {
      // Take the JSON data and transform
      // it into the Tree View DSL
      return {
        key: "input",
        type: "object",
        isRoot: false,
        children: [
          { key: "font-family", type: "value", value: "monaco, monospace;" },
          { key: "font-size", type: "value", value: "14px;" },
          { key: "margin-left", type: "value", value: "18px;" },
          {
            key: ".tree-view-item",
            type: "object",
            isRoot: false,
            children: [
              {
                key: "font-family",
                type: "value",
                value: "monaco, monospace;"
              },
              { key: "font-size", type: "value", value: "14px;" },
              { key: "margin-left", type: "value", value: "18px;" }
            ]
          },
          {
            key: ".tree-view-item-node",
            type: "object",
            isRoot: false,
            children: [
              { key: "cursor", type: "value", value: "pointer;" },
              { key: "position", type: "value", value: "relative;" },
              { key: "white-space", type: "value", value: "nowrap;" }
            ]
          },
          {
            key: ".tree-view-item-leaf",
            type: "object",
            isRoot: false,
            children: [
              {
                key: "boder",
                type: "object",
                isRoot: false,
                children: [
                  { key: "color", type: "value", value: "red" },
                  { key: "size", type: "value", value: "1em" }
                ]
              }
            ]
          }
        ]
      };
      // Strings or Integers should not be attempted to be split, so we generate
      // a new object with the string/number as the value
      if (this.isValue(this.data)) {
        return this.transformValue(this.data, this.allOptions.rootObjectKey);
      }

      // If it's an object or an array, transform as an object
      return this.transformObject(
        this.data,
        this.allOptions.rootObjectKey,
        true
      );
    }
  }
};
</script>

<style scoped>
.tree-view-wrapper {
  overflow: auto;
}

/* Find the first nested node and override the indentation */
.tree-view-item-root > .tree-view-item-leaf > .tree-view-item {
  margin-left: 0 !important;
}

/* Root node should not be indented */
.tree-view-item-root {
  margin-left: 0 !important;
}
</style>
