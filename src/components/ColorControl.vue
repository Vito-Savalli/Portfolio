<template>
  <div>
    <div class="whiteDot">•</div>
    <span class="dotHelper"></span>
    <input
      type="range"
      min="145"
      max="420"
      v-model="colorValue"
      @input="updateColor"
      class="colorPicker"
    />
  </div>
</template>

<script>
export default {
  props: {
    initialColor: {
      type: Number,
      default: 145,
    },
  },
  data() {
    return {
      colorValue: this.initialColor,
    };
  },
  computed: {
    computedColor() {
      return `hsl(${this.colorValue}, 100%, 50%)`; // Adjusting hue in HSL
    },
  },
  methods: {
    updateColor() {
      document.documentElement.style.setProperty(
        "--main-color",
        this.computedColor
      );
      this.$emit("colorChanged", this.computedColor); // Emit the color change
    },
  },
  mounted() {
    this.updateColor();
    if (window.chrome && !window.opr && !window.edge) {
      document.documentElement.classList.add("chrome-browser");
    }
  },
};
</script>

<style scoped>
.colorPicker {
  position: absolute;
  top: 49.4px;
  right: 49.6px;
  writing-mode: bt-lr; /* IE */
  -webkit-appearance: slider-vertical; /* WebKit */
  width: 8px; /* Thickness */
  height: 200px; /* Length */
  transform: rotate(180deg);
  cursor: grab;
  display: none;
  z-index: 999;
}

.chrome-browser .colorPicker::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: #2f3031;
  border-radius: 13px;
  border: 0.1px solid #000000;
}

.chrome-browser .colorPicker::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: white !important;
  color: white !important;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px;
  transform: translateX(4px);
  outline: none;
  filter: brightness(1000%) saturate(0%);
}

@-moz-document url-prefix() {
  .colorPicker {
    display: none;
  }
}

.whiteDot {
  color: var(--main-color);
  position: absolute;
  font-size: 70px;
  border-radius: 100%;
  top: -16px;
  right: 39.6px;
  cursor: grab;
  transition: 0.3s ease;
}

.dotHelper {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 14px;
  right: 28px;
  z-index: 99;
  background-color: transparent;
}

.dotHelper:hover {
  height: 240px;
}
.dotHelper:hover + .colorPicker {
  display: block;
}

.colorPicker:hover {
  display: block;
}

.dotHelper:hover + .whiteDot {
  display: none;
}
.colorPicker:hover + .whiteDot {
  display: none;
}

@-moz-document url-prefix() {
  .whiteDot {
    display: none;
  }

  .dotHelper {
    display: none;
  }
}

@media (max-width: 920px) {
  .whiteDot,
  .colorPicker,
  .dotHelper {
    display: none;
  }
}
</style>
