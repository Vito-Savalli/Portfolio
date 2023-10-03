<template>
  <div class="loading-screen" v-if="showLoadingScreen">
    <div class="screen-part top"></div>
    <div class="screen-part bottom">
      <div class="ajaxHelper">
        <div class="ajaxloader3 aj1">
          <div class="outer"></div>
          <div class="inner"></div>
        </div>
        <div class="ajaxloader3 aj2">
          <div class="outer"></div>
          <div class="inner"></div>
        </div>
        <div class="ajaxloader3 aj3">
          <div class="outer"></div>
          <div class="inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoadingScreen: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.animateAway();
    }, 3200);
  },
  methods: {
    animateAway() {
      const topPart = this.$el.querySelector(".screen-part.top");
      const bottomPart = this.$el.querySelector(".screen-part.bottom");

      topPart.style.transform = "translateY(-100%)";
      bottomPart.style.transform = "translateY(100%)";

      setTimeout(() => {
        this.showLoadingScreen = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: transparent;
  overflow: hidden;
}

.loading-animation {
  position: absolute;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
}
.screen-part {
  position: absolute;
  width: 100%;
  height: 50%;
  background: #333131;
  background: rgb(23, 23, 23);
  transition: transform 1s ease-out;
}

.screen-part.top {
  top: 0;
  transform: translateY(0);
  border-bottom: none;
  animation: screenTop 0.1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}

.screen-part.bottom {
  bottom: 0;
  transform: translateY(0);
  display: flex;
  justify-content: center;
  gap: 10px;
  border-top: none;
  animation: screenBot 0.1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}

@keyframes screenTop {
  from {
    border-bottom: none;
  }
  to {
    border-bottom: 1px solid white;
  }
}

@keyframes screenBot {
  from {
    border-top: none;
  }
  to {
    border-top: 1px solid white;
  }
}

.ajaxHelper {
  display: flex !important;
  gap: 100px;
  animation: ajaxMask 0.1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  display: inline-block;
  width: 300px;
  opacity: 1;
  transform: translateY(124px);
}

@keyframes ajaxMask {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .ajaxHelper {
    transform: translateX(-10%) translateY(124px);
  }
}

.ajaxloader3 {
  margin: 0 auto;
  width: 50px;
  transform: scale(2);
}
.ajaxloader3 .outer {
  border: 5px solid var(--main-color);
  opacity: 0.9;
  border-right-color: transparent;
  border-left-color: transparent;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 35px rgba(0, 76, 61, 0.9);
  -moz-box-shadow: 0 0 35px rgba(0, 76, 61, 0.9);
  box-shadow: 0 0 35px rgba(0, 76, 61, 0.9);
  -webkit-animation: spin-pulse 1s linear infinite normal;
  -moz-animation: spin-pulse 1s linear infinite normal;
  -ms-animation: spin-pulse 1s linear infinite normal;
  animation: spin-pulse 1s linear infinite normal;
  -webkit-animation-delay: 0;
  -moz-animation-delay: 0;
  -o-animation-delay: 0;
  animation-delay: 0;
}
.ajaxloader3 .inner {
  border: 5px solid var(--main-color);
  opacity: 0.9;
  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 15px rgba(0, 76, 61, 0.9);
  -moz-box-shadow: 0 0 15px rgba(0, 76, 61, 0.9);
  box-shadow: 0 0 15px rgba(0, 76, 61, 0.9);
  width: 30px;
  height: 30px;
  position: relative;
  top: -40px;
  left: 2px;
  margin: 0 auto;
  -webkit-animation: spin-right 1s linear infinite normal;
  -moz-animation: spin-right 1s linear infinite normal;
  -ms-animation: spin-right 1s linear infinite normal;
  animation: spin-right 1s linear infinite normal;
  -webkit-animation-delay: 0;
  -moz-animation-delay: 0;
  -o-animation-delay: 0;
  animation-delay: 0;
}

@keyframes spin-right {
  from {
    transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1;
  }
  to {
    transform: rotate(360deg);
    opacity: 0.2;
  }
}
@-moz-keyframes spin-right {
  from {
    -moz-transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    -moz-transform: rotate(180deg);
    opacity: 1;
  }
  to {
    -moz-transform: rotate(360deg);
    opacity: 0.2;
  }
}
@-webkit-keyframes spin-right {
  from {
    -webkit-transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    -webkit-transform: rotate(180deg);
    opacity: 1;
  }
  to {
    -webkit-transform: rotate(360deg);
    opacity: 0.2;
  }
}

@keyframes spin-pulse {
  from {
    transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px rgba(0, 61, 76, 0.9);
  }
  50% {
    transform: rotate(145deg);
    opacity: 1;
  }
  to {
    transform: rotate(-320deg);
    opacity: 0;
  }
}
@-moz-keyframes spin-pulse {
  from {
    -moz-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px rgba(0, 61, 76, 0.9);
  }
  50% {
    -moz-transform: rotate(145deg);
    opacity: 1;
  }
  to {
    -moz-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-webkit-keyframes spin-pulse {
  from {
    -webkit-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px rgba(0, 61, 76, 0.9);
  }
  50% {
    -webkit-transform: rotate(145deg);
    opacity: 1;
  }
  to {
    -webkit-transform: rotate(-320deg);
    opacity: 0;
  }
}

.aj1 {
  animation: loaderMask 0.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 0.2s;
  opacity: 0;
}
.aj2 {
  animation: loaderMask 0.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 1.3s;
  opacity: 0;
}
.aj3 {
  animation: loaderMask 0.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 2.5s;
  opacity: 0;
}

@keyframes loaderMask {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
