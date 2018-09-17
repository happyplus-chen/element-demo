<template>
  <textarea></textarea>
</template>
<script>
import _CodeMirror from "codemirror";
const CodeMirror = window.CodeMirror || _CodeMirror;
import "codemirror/lib/codemirror.css";
import "codemirror/theme/night.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/css-hint.js";
export default {
  props: {
    value: String
  },
  data() {
    return {
      editor: null,
      content: ""
    };
  },
  watch: {
    value(newVal, oldval) {
      const cm_value = this.editor.getValue();
      if (newVal !== cm_value) {
        const scrollInfo = this.editor.getScrollInfo();
        this.editor.setValue(newVal);
        this.content = newVal;
        this.editor.scrollTo(scrollInfo.left, scrollInfo.top);
      }
    }
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(this.$el, {
      mode: "css",
      lineNumbers: true
      //   foldGutter: true,
      //   theme: "night"
    });
    this.editor.setValue(this.value || this.content);
    this.editor.on("change", cm => {
      this.content = cm.getValue();
      this.$emit("input", this.content);
    });
  },
  beforeDestroy() {
    this.$el.remove();
  }
};
</script>
