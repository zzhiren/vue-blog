<template lang="pug">
  div.home
    div.content
      div.left-side
        div.nav-list
          router-link.nav-item(tag="div" to="/Blog" v-bind:class="{active:state==3}" v-on:click.native="itemActive(3)") BLOG
          router-link.nav-item(tag="div" to="/" v-bind:class="{active:state==4}" v-on:click.native="itemActive(4)") MUSIC
          router-link.nav-item(tag="div" to="/" v-bind:class="{active:state==5}" v-on:click.native="itemActive(5)") RESUM
          router-link.nav-item(tag="div" to="/" v-bind:class="{active:state==6}" v-on:click.native="itemActive(6)") GITHUB
          router-link.nav-item(tag="div" to="/" v-bind:class="{active:state==7}" v-on:click.native="itemActive(7)") EMAIL
          router-link.nav-item(tag="div" to="/" v-bind:class="{active:state==8}" v-on:click.native="itemActive(8)") 简书
          router-link.nav-item(tag="div" to="/" v-bind:class="{active:state==9}" v-on:click.native="itemActive(9)") 掘金
          router-link.nav-item(tag="div" to="/" v-bind:class="{active:state==10}" v-on:click.native="itemActive(10)") 掘金
          router-link.nav-item(tag="div" to="/" v-bind:class="{active:state==11}" v-on:click.native="itemActive(11)") SOF
          
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
  background: rgba(0, 0, 0, 0.1);
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
        background: $black;
        opacity: .6;
        .nav-item{
          width: 161px;
          height: 42px;
          margin-bottom: 7px;
          font-family: "微软雅黑";
          font-size: 14px;
          line-height: 42px;
          color: white;
          font-style: normal;
          font-weight: bold;
          padding-left: 20px;
          box-sizing: border-box;
          &:hover{
            cursor: pointer;
            color: $font-color;
          }
        }
        .active{
          background: $black;
          opacity: 1;
          color: white;
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

