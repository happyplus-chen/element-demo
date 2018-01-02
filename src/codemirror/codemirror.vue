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
  data() {
    return {
      editor: null,
      value: ""
    };
  },
  created() {
    this.editor.on("change", cm => {
      this.value = cm.getValue();
      this.$emit("input", this.value);
    });
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(this.$el, {
      mode: "css",
      lineNumbers: true,
      extraKeys: { "Ctrl-Space": "autocomplete" },
      foldGutter: true,
      theme: "night"
    });
  }
};
</script>
