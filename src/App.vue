<template lang='pug'>
div#app
  div.bg
  div.fliter
  top-header
  router-view
</template>

<script>
import TopHeader from "./components/common/vue/TopHeader";
export default {
  name: "app",
  components: {
    TopHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  // background: white;
  opacity: 1;
  background: url(./assets/bg4.jpg) center top;
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
}
body {
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
h4 {
  padding: 0;
  margin: 0;
}
h4 {
  font-size: 14px;
}
</style>
