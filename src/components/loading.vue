<template>
    <transition :name="animation">
        <div class="loading-overlay is-active" v-if="isActive">
            <div class="loading-background" @click="cancel"/>
            <div class="loading-icon"/>
        </div>
    </transition>
</template>

<script>
export default {
  name: "Loading",
  props: {
    active: Boolean,
    programmatic: Boolean,
    animation: {
      type: String,
      default: "fade"
    },
    canCancel: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      isActive: this.active || false
    };
  },
  watch: {
    active(value) {
      this.isActive = value;
    }
  },
  methods: {
    cancel() {
      if (!this.canCancel) return;
      this.close();
    },

    close() {
      this.onCancel.apply(null, arguments);
      this.$emit("close");
      this.$emit("update:active", false);
      // Timeout for the animation complete before destroying
      if (this.programmatic) {
        this.isActive = false;
        setTimeout(() => {
          this.$destroy();
          this.removeElement(this.$el);
        }, 150);
      }
    },
    removeElement(el) {
      if (typeof el.remove !== "undefined") {
        el.remove();
      } else {
        el.parentNode.removeChild(el);
      }
    },

    keyPress(event) {
      // Esc key
      if (event.keyCode === 27) this.cancel();
    }
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("keyup", this.keyPress);
    }
  },
  beforeMount() {
    // Insert the Loading component in body tag
    // only if it's programmatic
    this.programmatic && document.body.appendChild(this.$el);
  },
  mounted() {
    if (this.programmatic) this.isActive = true;
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      document.removeEventListener("keyup", this.keyPress);
    }
  }
};

// export default loading;
</script>

<style>
.loading-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: none;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 999;
}

.loading-overlay.is-active {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.loading-overlay .loading-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: #7f7f7f;
  background: rgba(255, 255, 255, 0.5);
}

.loading-overlay .loading-icon {
  position: relative;
}

.loading-overlay .loading-icon:after {
  -webkit-animation: spinAround 500ms infinite linear;
  animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
  position: absolute;
  top: 0;
  left: calc(50% - 2.5em);
  width: 5em;
  height: 5em;
  border-width: 0.25em;
}
</style>
