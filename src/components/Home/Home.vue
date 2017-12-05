<template lang="pug">
  div.home
    div.content
      div.left-side
        div.nav-list
          router-link.nav-item(tag="div" to="/blog"  v-on:click.native="itemActive(3)") 博客
          router-link.nav-item(tag="div" to="/music" v-on:click.native="itemActive(4)") 音乐
          router-link.nav-item(tag="div" to="/resume" v-on:click.native="itemActive(5)") 简历
          //- router-link.nav-item(tag="div" to="/" v-on:click.native="itemActive(6)") GitHub
          router-link.nav-item(tag="div" to="/collection" v-on:click.native="itemActive(7)") 收藏
          
      div.main-content
        router-view 
      div.right-side
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
          font-family: "微软雅黑";
          font-size: 14px;
          line-height: 42px;
          color: rgba(0,0,0,.6);
          font-style: normal;
          font-weight: bold;
          padding-left: 20px;
          box-sizing: border-box;
          &:hover{
            cursor: pointer;
            color: $font-color;
          }
        }
        
      }
    }
    .main-content{
      margin-top: $margin-top;
      width: 595px;
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

