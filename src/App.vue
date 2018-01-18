<template lang='pug'>
div#app
  vue-particles(
        color="#dedede"
        :particleOpacity=".7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="14"
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
  div.content
    transition(name="slide-fade" appear mode="out-in")
      keep-alive(include ="Home")
        router-view.home-router
  Footer(v-show="state == 1")
</template>

<script>
import TopHeader from "./components/common/vue/TopHeader";
import Footer from "./components/common/vue/Footer";

export default {
  name: "app",
  data() {
    return {
      state: 1
    };
  },
  components: {
    TopHeader,
    Footer
  },
  beforeRouteUpdate(to, from, next) {
    this.state = 1;
  },
  watch: {
    $route: "watchFooter"
  },
  created() {
    setTimeout(() => {
      this.state == 0;
    }, 10000);
  },
  mounted() {
    if(!localStorage.userName){
      localStorage.userName = ''
    }
    if(!localStorage.userEmail){
      localStorage.userEmail = ''
    }
    if(!localStorage.userSite){
      localStorage.userSite = ''
    }
    if(!localStorage.avatarImg){
      localStorage.avatarImg = ''
    }
    if(!localStorage.love){
      localStorage.love = {}
    }
  },
  methods: {
    watchFooter() {
      this.state = 1;
    }
  }
};
</script>

<style lang="scss">
@import "src/components/common/scss/base.scss";
.content {
  .home-router {
    min-height: calc(100vh - 14px - 63px);
  }
}
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
  pointer-events: none;
  background: rgba(255, 255, 255, 0);
  .particles-js-canvas-el {
    pointer-events: none;
  }
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
  background-color: $background-white;
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
  opacity: 1;
  background: url(./assets/codewhite.png) left top;
  background-repeat: repeat-x;
  background-attachment: fixed;
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
    display: block;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    background-color: rgba(150, 150, 150, 0.3);
    &:hover {
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
