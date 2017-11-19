<template lang="pug">
  div#blog
    swiper.swiper(:options="swiperOption" ref="mySwiper")
        swiper-slide.swiper-slide(v-for="(item, index) in data" v-bind:key="item.id")
          img#swiper-img(v-bind:src="item.img" alt="" v-on:click="toActiveDetils(item.id)")
          div.title()  {{ item.title}}
    //- div(class="swiper-pagination" slot="pagination")
    div
      div.blog-list
          div.item-thumb
            img#img(src="../../assets/bg4.jpg")
          div.item-body
              h4.title 欢喜勇猛，向死而生
              p.preface 天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？
              div.meta 
                span
                  i.fcc-time.icon-font
                  span.meta-span 2017/11/11
                  i.fcc-eye.icon-font
                  span.meta-span 256
                  i.fcc-male.icon-font 
                  span.meta-span 10
                  i.fcc-heart.icon-font
                  span.meta-span 121
                  i.fcc-attach.icon-font
                  span.meta-span code
      div.blog-list
          div.item-thumb
            img#img(src="../../assets/bg4.jpg")
          div.item-body
              h4.title 欢喜勇猛，向死而生
              p.preface 天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？
              div.meta 
                i.fcc-time.icon-font
                span.meta-span 2017/11/11
                i.fcc-eye.icon-font
                span.meta-span 256
                i.fcc-male.icon-font 
                span.meta-span 10
                i.fcc-heart.icon-font
                span.meta-span 121
                i.fcc-attach.icon-font
                span.meta-span code
      div.blog-list
          div.item-thumb
            img#img(src="../../assets/bg4.jpg")
          div.item-body
              h4.title 欢喜勇猛，向死而生
              p.preface 天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？
              div.meta 
                i.fcc-time.icon-font
                span.meta-span 2017/11/11
                i.fcc-eye.icon-font
                span.meta-span 256
                i.fcc-male.icon-font 
                span.meta-span 10
                i.fcc-heart.icon-font
                span.meta-span 121
                i.fcc-attach.icon-font
                span.meta-span code
      div.blog-list
          div.item-thumb
            img#img(src="../../assets/bg4.jpg")
          div.item-body
              h4.title 欢喜勇猛，向死而生
              p.preface 天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？
              div.meta 
                i.fcc-time.icon-font
                span.meta-span 2017/11/11
                i.fcc-eye.icon-font
                span.meta-span 256
                i.fcc-male.icon-font 
                span.meta-span 10
                i.fcc-heart.icon-font
                span.meta-span 121
                i.fcc-attach.icon-font
                span.meta-span code
      div.blog-list
          div.item-thumb
            img#img(src="../../assets/bg4.jpg")
          div.item-body
              h4.title 欢喜勇猛，向死而生
              p.preface 天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？
              div.meta 
                i.fcc-time.icon-font
                span.meta-span 2017/11/11
                i.fcc-eye.icon-font
                span.meta-span 256
                i.fcc-male.icon-font 
                span.meta-span 10
                i.fcc-heart.icon-font
                span.meta-span 121
                i.fcc-attach.icon-font
                span.meta-span code
      div.blog-list
          div.item-thumb
            img#img(src="../../assets/bg4.jpg")
          div.item-body
              h4.title 欢喜勇猛，向死而生
              p.preface 天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？
              div.meta 
                i.fcc-time.icon-font
                span.meta-span 2017/11/11
                i.fcc-eye.icon-font
                span.meta-span 256
                i.fcc-male.icon-font 
                span.meta-span 10
                i.fcc-heart.icon-font
                span.meta-span 121
                i.fcc-attach.icon-font
                span.meta-span code
      div.blog-list
          div.item-thumb
            img#img(src="../../assets/bg4.jpg")
          div.item-body
              h4.title 欢喜勇猛，向死而生
              p.preface 天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？
              div.meta 
                i.fcc-time.icon-font
                span.meta-span 2017/11/11
                i.fcc-eye.icon-font
                span.meta-span 256
                i.fcc-male.icon-font 
                span.meta-span 10
                i.fcc-heart.icon-font
                span.meta-span 121
                i.fcc-attach.icon-font
                span.meta-span code
</template>
<script>
import img1 from "../../assets/alone.jpg";
import img2 from "../../assets/1.jpeg";
import img3 from "../../assets/2.jpeg";
import img4 from "../../assets/3.jpg";
export default {
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 4000,
        grabCursor: true,
        setWrapperSize: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        mousewheelControl: false,
        observeParents: true,
        loop: true,
        autoplayDisableOnInteraction: false
      },
      data: [
        {
          title: "天堂地狱",
          img: img1
        },
        {
          title: "说好的幸福呢",
          img: img2
        },
        {
          title: "哈哈哈哈",
          img: img4
        },
        {
          title: "放逐之刃",
          img: img3
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "src/components/common/scss/base.scss";
#blog {
  width: 100%;
  height: 100%;
  .swiper {
    width: 595px;
    height: 210px;
    position: relative;
    z-index: 1;
    #swiper-img {
      width: 595px;
      transition: transform 0.5s linear;
      &:hover {
        cursor: pointer;
        transform: rotate(2deg) scale(1.1);
      }
    }
    .title {
      height: 28px;
      position: absolute;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 1px;
      color: white;
      right: 21px;
      top: 16px;
      line-height: 28px;
      padding-left: 6px;
      padding-right: 6px;
      box-sizing: border-box;
      font-family: DINRegular;
    }
  }
  .blog-list {
    width: 100%;
    height: 133px;
    margin-top: $margin-all;
    background: rgba(0, 0, 0, 0.85);
    // background: rgba(28, 28, 28, .9);
    padding: 7px 7px 7px 7px;
    box-sizing: border-box;
    display: flex;
    -webkit-transition: $hover-bg;
    -webkit-transition: $hover-bg;
    transition: $hover-bg;
    &:hover {
      background: rgba(28, 28, 28, 0.95);
    }
    &:hover #img {
      transform: translateX(-10px);
    }
    &:hover .title {
      text-decoration: underline;
      transform: translateX(10px);
      opacity: 1 !important;
      // color: #42b983!important;
    }
    .item-thumb {
      width: 168px;
      height: 119px;
      overflow: hidden;
      #img {
        transition: transform 0.25s linear;
        width: 220px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .item-body {
      flex: 1;
      height: 119px;
      margin-left: $margin-all;
      .title {
        letter-spacing: 1px;
        margin-top: 2.8px;
        margin-bottom: 7px;
        color: white;
        opacity: 0.9;
        -webkit-transition: $hover-bg;
        -webkit-transition: $hover-bg;
        transition: $hover-bg;
        &:hover {
          cursor: pointer;
        }
      }
      .preface {
        color: gray;
        font-size: 13px;
        height: 63px;
        line-height: 22px;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        display: -webkit-box;
      }
      .meta {
        height: 25px;
        font-size: $iconfont-size;
        line-height: 30px;
        color: $blog-list-meta-font-color;
        opacity: $blog-list-meta-font-opacity;
        &:hover {
          cursor: pointer;
        }
        .icon-font {
          font-size: $iconfont-size;
          margin-right: 4px;
        }
        .meta-span {
          color: white;
          letter-spacing: 1px;
          margin-right: 25px;
          font-family: DINRegular, -apple-system, BlinkMacSystemFont,
            "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI",
            "Microsoft YaHei", "\\5FAE软雅黑", sans-serif;
          font-weight: 100;
          font-size: $blog-list-meta-font-size;
        }
      }
    }
  }
}
</style>
