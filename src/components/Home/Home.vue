<template lang="pug">
  div.home
    div.content
      div.left-side
        div.nav-list
          router-link.nav-item(tag="div" to="/blog"  v-on:click.native="itemActive(3)") 
            Icon.icon-font(type="home") 
            span BLOG
          router-link.nav-item(tag="div" to="/about" v-on:click.native="itemActive(5)") 
            Icon.icon-font(type="android-person") 
            span ABOUT
          router-link.nav-item(tag="div" to="/music" v-on:click.native="itemActive(4)") 
            Icon.icon-font(type="headphone") 
            span MUSIC
          //- router-link.nav-item(tag="div" to="/" v-on:click.native="itemActive(6)") GitHub
          router-link.nav-item(tag="div" to="/collection" v-on:click.native="itemActive(7)") 
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
      this.state = state;
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
        // background: rgba(0, 0, 0, 0.2);
        // background: rgba(0, 0, 0, 0.4);
        .nav-item{
          width: 161px;
          height: 42px;
          margin-bottom: 7px;
          font-family: 'Aldrich', sans-serif;
          font-size: 13px;
          line-height: 42px;
          color: rgba(0,0,0,.5);
          font-style: normal;
          font-weight: bold;
          padding-left: 15px;
          box-sizing: border-box;
          &:hover{
            cursor: pointer;
            color: $font-color-blue;
          }
          .icon-font{
            font-size: 16px;
            margin-right: 8px;
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
      background: blue;
    }
  }
}
</style>

