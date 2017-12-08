<template lang='pug'>
div#app
  //- div.bg
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
.active {
  background: rgba(0, 0, 0, 0.8);
  color: $font-color-blue !important;
}
.anchorBL {
  display: none;
}
.amap-logo,
.amap-copyright {
  display: none!important;
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
  background: url(./assets/bg11.jpg) center top;
  // background: url(./assets/bg12.jpg) center top;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  // filter: blur(0.8px);
  // margin: -30px;
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
    height: 16px;
    background-color: black;
    opacity: 1;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    // background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(54, 54, 54, 0.3);
    background-color: #555;
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
