<template lang='pug'>
div#app
  vue-particles(
        color="#dedede"
        :particleOpacity="0.8"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="12"
        linesColor="#dedede"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.7"
        :linesDistance="100"
        :moveSpeed="2"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="remove")
  top-header
  router-view
  //- Footer
</template>

<script>
import TopHeader from "./components/common/vue/TopHeader";
import Footer from "./components/common/vue/Footer";
// import FCCIcon from './assets/FCC-fontIcon/css/fccHangzhou.css';
export default {
  name: "app",
  components: {
    TopHeader,
    Footer
  }
};
</script>

<style lang="scss">
@import "src/components/common/scss/base.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
#particles-js {
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  // background: rgba(255,255,255,0);
}
.v-note-op {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.v-note-panel {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.v-note-wrapper {
  height: 100% !important;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.active {
  background-color: rgba(255,255,255,0.8);
  color: $font-color-blue !important;
}
.anchorBL {
  display: none;
}
.amap-logo,
.amap-copyright {
  display: none !important;
}
body {
  // background: white;
  opacity: 1;
  // background: url(./assets/bg1.jpg) center top;
  // background: url(./assets/bg2.jpg) center top;
  // background: url(./assets/bg3.jpg) center top;
  // background: url(./assets/bg4.jpg) center top;
  // background: url(./assets/bg5.jpg) center top;
  // background: url(./assets/bg6.jpg) center top;
  // background: url(./assets/bg7.jpeg) center top;
  // background: url(./assets/bg9.jpg) center top;
  // background: url(./assets/bg10.jpg) center top;
  // background: url(./assets/bg11.jpg) center top;
  // background: url(./assets/bg12.jpg) center top;
  // background: url(./assets/bgwhite.png) center top;
  // background: url(./assets/bgblack.png) center top;
  // background: url(./assets/codeblack.png) center top;
  // background-color: red;
  // background: url(./assets/codewhite.png) center top;
  background: url(./assets/codewhitelight.png) center top;

  background-repeat: repeat-x;
  // background-size: cover;
  // background-repeat: no-repeat;
  background-attachment: fixed;
  // background-position: center;
  // margin: -30px;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
    height: 16px;
    background-color: white;
    opacity: 1;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px white;
    border-radius: 10px;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    background-color: rgba(150, 150, 150, 0.5);
    &:hover{
      background-color: #0088f5;
    }
  }
}

body,
h1,
h2,
h3,
h4,
p {
  padding: 0;
  margin: 0;
  // margin-bottom: 7px!important;
}
h4 {
  font-size: 14px;
}
</style>
