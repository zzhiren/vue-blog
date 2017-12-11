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
            Icon.icon-font(type="ios-folder") 
            span PROJECT
          //- router-link.nav-item(tag="div" to="/" v-on:click.native="itemActive(6)") GitHub
          router-link.nav-item(tag="div" to="/collection") 
            Icon.icon-font(type="star") 
            span COLLECTION
      div.main-content
        router-view 
      //- div.right-side
</template>
<script>
export default {
  data() {
    return {
      state: 2
    }
  },
  methods: {
    itemActive(state) {
      // this.state = state;

    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/components/common/scss/base.scss';
$margin-top: 79px;
.home{
  width: 100%;
  // height: 100%;
  // background-color: rgba(0, 0, 0, 0.2);
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
          font-size: 13px;
          line-height: 40px;
          color: #777;
          font-style: normal;
          font-weight: bold;
          padding-left: 15px;
          box-sizing: border-box;
          &:hover{
            cursor: pointer;
            color: $font-color-blue;
          }
          .icon-font{
            font-size: 17px;
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

