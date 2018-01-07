<template lang="pug">
  div.home
    div.content
      div.left-side
        div.nav-list
          router-link.nav-item(tag="div" to="/blog" ) 
            Icon.icon-font(type="home") 
            span BLOG
          router-link.nav-item(tag="div" to="/about") 
            Icon.icon-font(type="android-person") 
            span ABOUT
          router-link.nav-item(tag="div" to="/music") 
            Icon.icon-font(type="headphone") 
            span MUSIC
          router-link.nav-item(tag="div" to="/project") 
            Icon.icon-font(type="folder") 
            span PROJECT
          //- router-link.nav-item(tag="div" to="/" v-on:click.native="itemActive(6)") GitHub
          router-link.nav-item(tag="div" to="/collection") 
            Icon.icon-font(type="star") 
            span COLLECTION
      div.main-content
        transition(name="slide-fade" appear mode="out-in")
          keep-alive(include ="BlogList")
            router-view 
</template>
<script>
import Footer from '../common/vue/Footer'
export default {
  name: 'Home',
  data() {
    return {
      state: 2
    }
  },
  components:{
    Footer,
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import 'src/components/common/scss/base.scss';
$margin-top: 76.99px;
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
.home{
  width: 100%;
  .content{
    width: $width;
    display: flex;
    margin: $margin-auto;
    .left-side{
      position: fixed;
      margin-top: $margin-top;
      width: 161px;
      height: 100px;
      .nav-list{
        width: 161px;
        .nav-item{
          width: 161px;
          height: 40px;
          margin-bottom: 8px;
          font-family: 'Asap', sans-serif;
          font-size: 14px;
          line-height: 40px;
          color: #777777;
          font-style: normal;
          font-weight: bold;
          padding-left: 15px;
          box-sizing: border-box;
          &:hover{
            cursor: pointer;
            color: $font-color-blue;
          }
          .icon-font{
            font-size: 15px;
            margin-right: 13px;
          }
          span{
            letter-spacing: 1px;
          }
        }
        
      }
    }
    .main-content{
      margin-top: $margin-top;
      width: 875px;
      margin-left: 175px;
      margin-right: $margin-all;
      // height: 1000px;
      // background: rgba(0, 0, 0, 0.7);
    }
    .right-side{
      position: fixed;
      margin-left: 784px;
      margin-top: $margin-top;
      width: 266px;
      height: 100px;
    }
  }
}
</style>