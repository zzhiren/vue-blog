<template lang="pug">
  div#blog
    swiper.swiper(:options="swiperOption" ref="mySwiper")
        swiper-slide.swiper-slide(v-for="(item, index) in data" v-bind:key="item.id")
            img(v-bind:src="item.img" alt="" v-on:click="toActiveDetils(item.id)")
            div.title()  {{ item.title}}
    //- div(class="swiper-pagination" slot="pagination")
    div.blog-list
        div.item-thumb
        div.item-body
            h4.title 手动阀手动阀手动阀发射点
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
        autoplay: 3000,
        grabCursor: true,
        setWrapperSize: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        mousewheelControl: false,
        observeParents: true,
        autoplayDisableOnInteraction: false,
        loop: true
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
  height: 100px;
  .swiper {
    width: 595px;
    height: 210px;
    position: relative;
    img {
      width: 595px;
    }
    .title {
      height: 28px;
      //   width: 100px;
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
    background: rgba(0, 0, 0, 0.8);
    // background: rgba(28, 28, 28, .9);
    padding: 7px 7px 7px 7px;
    box-sizing: border-box;
    display: flex;
    -webkit-transition: $hover-bg;
    -webkit-transition: $hover-bg;
    transition: $hover-bg;
    transition: $hover-bg;
    transition: $hover-bg;
    &:hover {
      background: rgba(0, 0, 0, 0.6);
    }
    .item-thumb {
      width: 168px;
      height: 119px;
    }
    .item-body {
      flex: 1;
      height: 119px;
      margin-left: $margin-all;
      .title {
        margin-top: 2.8px;
        color: white;
        -webkit-transition: $hover-bg;
        -webkit-transition: $hover-bg;
        transition: $hover-bg;
        transition: $hover-bg;
        transition: $hover-bg;
        &:hover {
          cursor: pointer;
          margin-left: 12px;
          color: #42b983;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
