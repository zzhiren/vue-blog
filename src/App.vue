<template lang='pug'>
div#app
  div.bg

  top-header
  router-view
</template>

<script>
import TopHeader from './components/common/vue/TopHeader'
export default {
  name: 'app',
  components:{
    TopHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .bg{
    background: url(./assets/bg1.jpg) center top;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(0.8px);
    // margin: -30px;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
}
body{
  padding: 0;
  margin: 0;
}
</style>
