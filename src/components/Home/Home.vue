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
          //- router-link.nav-item(tag="div" to="/music") 
          //-   Icon.icon-font(type="headphone") 
          //-   span MUSIC
          router-link.nav-item(tag="div" to="/project") 
            Icon.icon-font(type="folder") 
            span PROJECT
          //- router-link.nav-item(tag="div" to="/collection") 
          //-   Icon.icon-font(type="star") 
          //-   span COLLECTION
          a.nav-item(href="https://github.com/Zzhiren" target="_blank")
            Icon.icon-font(type="social-github")
            span GITHUB
          a.nav-item(href="https://zzhiren.github.io/" target="_blank")
            //- Icon.icon-font(type="social-github")
            span.hexo HEXO.ME
          a.nav-item.vue-hover(href="https://cn.vuejs.org/v2/guide/" target="_blank")
            //- img(src="./../../assets/vue.svg" width="16")
            span.vue VUE.JS
          a.nav-item.vue-hover(href="https://vuex.vuejs.org/zh-cn/" target="_blank")
            //- Icon.icon-font(type="social-github")
            span.vue VUEX
          a.nav-item.vue-hover(href="https://router.vuejs.org/zh-cn/" target="_blank")
            //- Icon.icon-font(type="social-github")
            span.vue VUE-ROUTER
          a.nav-item(href="https://www.iviewui.com/" target="_blank")
            //- img.img-icon(src="../../assets/iview.png")
            span.iview IVIEW
          a.nav-item(href="https://doc.webpack-china.org/" target="_blank")
            //- Icon.icon-font(type="social-github")
            span.webpack WEBPACK
      div.main-content
        transition(name="slide-fade" appear mode="out-in")
          keep-alive(include ="Project,About" exclude="BlogListByTag,BlogDetails")
            router-view
    div.top-down
      div.btn
        div.box(@click="_scrollTop(0)")
          Icon.iview-icon(type="chevron-up")
        div.box(@click="_scrollTop(1)")
          Icon.iview-icon(type="chevron-down")
</template>
<script>
import Footer from "../common/vue/Footer";
export default {
  name: "Home",
  data() {
    return {
      state: 2
    };
  },
  components: {
    Footer
  },
  mounted() {
  },
  methods: {
    _scrollTop(value) {
      if (value == 0) {
        let currentPosition;
        let timer;
        let speed = 80;
        timer = setInterval(function() {
          currentPosition =
            document.documentElement.scrollTop || document.body.scrollTop;
          currentPosition -= speed; //speed变量
          if (currentPosition > 0) {
            window.scrollTo(0, currentPosition);
          } else {
            window.scrollTo(0, 0);
            clearInterval(timer);
          }
        }, 1);
      } else if (value == 1) {
        let currentPosition = 0;
        let timer;
        let speed = 80;
        // document.body.scrollHeight 文档总高度
        // document.body.clientHeight视窗高度
        let h = document.body.scrollHeight - document.body.clientHeight;
        timer = setInterval(function() {
          // let h = document.documentElement.scrollTop || document.body.scrollTop;
          currentPosition += speed; //speed变量
          if (currentPosition < h) {
            window.scrollTo(0, currentPosition);
          } else {
            window.scrollTo(0, h);
            clearInterval(timer);
          }
        }, 1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/components/common/scss/base.scss";
$margin-top: 76.99px;
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.home {
  width: 100%;
  position: relative;
  .top-down {
    position: fixed;
    width: 1250px;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    height: calc(100vh - 28px - 63px);
    .btn {
      position: absolute;
      width: 42px;
      height: 84px;
      bottom: 0;
      right: 0;
      .box {
        width: 42px;
        height: 42px;
        background: $background-white;
        transition: background 0.5s linear;
        text-align: center;
        &:hover {
          background: hsla(0, 0%, 77%, 0.4);
          cursor: pointer;
        }
        .iview-icon {
          line-height: 42px;
          font-size: 15px;
          color: #555;
        }
      }
    }
  }
  .content {
    position: relative;
    width: $width;
    display: flex;
    margin: $margin-auto;
    z-index: 9;
    .left-side {
      position: fixed;
      margin-top: $margin-top;
      width: 161px;
      height: 100px;
      .nav-list {
        width: 161px;
        .vue-hover{
          &:hover{
            color: $font-color!important;
          }
        }
        .nav-item {
          display: block;
          width: 161px;
          height: 40px;
          margin-bottom: 8px;
          font-family: "Asap", sans-serif;
          // font-family: 'Exo 2', sans-serif;
          font-size: 14px;
          line-height: 40px;
          color: #777777;
          font-style: normal;
          font-weight: bold;
          padding-left: 15px;
          box-sizing: border-box;
          &:hover {
            cursor: pointer;
            color: $font-color-blue;
          }
          .icon-font {
            font-size: 15px;
            margin-right: 13px;
          }
          span {
            letter-spacing: 1px;
          }
          a {
            color: inherit;
          }
          .hexo {
            &::before {
              content: url(../../assets/hexo.svg);
              display: inline-block;
              vertical-align: middle;
              margin-top: 4px;
              margin-right: 11px;
              margin-left: -1px;
            }
          }
          .vue {
            &::before {
              content: url(../../assets/tagvue.png);
              display: inline-block;
              vertical-align: middle;
              margin-top: 4px;
              margin-right: 11px;
              margin-left: -1px;
            }
          }
          .iview {
            &::before {
              content: url(../../assets/iview.svg);
              vertical-align: middle;
              display: inline-block;
              margin-right: 11px;
              margin-top: 4px;
              margin-left: -1px;
            }
          }
          .webpack {
            &::before {
              content: url(../../assets/webpack.svg);
              vertical-align: middle;
              display: inline-block;
              margin-right: 11px;
              margin-top: 4px;
              margin-left: -1px;
            }
          }
        }
      }
    }
    .main-content {
      margin-top: $margin-top;
      width: 875px;
      margin-left: 175px;
      margin-right: $margin-all;
    }
    .right-side {
      position: fixed;
      margin-left: 784px;
      margin-top: $margin-top;
      width: 266px;
      height: 100px;
    }
  }
}
</style>