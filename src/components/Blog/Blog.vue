<template lang="pug">
  div#blog
    swiper.swiper(:options="swiperOption" ref="mySwiper")
        swiper-slide.swiper-slide(v-for="(item, index) in data" v-bind:key="item.id")
          img#swiper-img(v-bind:src="item.img" alt="" v-on:click="toActiveDetils(item.id)")
          div.title()  {{ item.title}}
    //- div(class="swiper-pagination" slot="pagination")
    div.blog-list
        div.item-thumb
          img#img(src="../../assets/bg4.jpg")
        div.item-body
            h4.title 手动阀手动阀手动阀发射点
    div.blog-list
        div.item-thumb
          img#img(src="../../assets/bg4.jpg")
        div.item-body
            h4.title 手动阀手动阀手动阀发射点
    div.blog-list
        div.item-thumb
          img#img(src="../../assets/bg4.jpg")
        div.item-body
            h4.title 手动阀手动阀手动阀发射点
    div.blog-list
        div.item-thumb
          img#img(src="../../assets/bg4.jpg")
        div.item-body
            h4.title 手动阀手动阀手动阀发射点
    div.blog-list
        div.item-thumb
          img#img(src="../../assets/bg4.jpg")
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
				autoplay: 4000,
				grabCursor: true,
				setWrapperSize: true,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				prevButton: '.swiper-button-prev',
				nextButton: '.swiper-button-next',
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
    background: rgba(0, 0, 0, 0.85);
    // background: rgba(28, 28, 28, .9);
    padding: 7px 7px 7px 7px;
    box-sizing: border-box;
    display: flex;
    -webkit-transition: $hover-bg;
    -webkit-transition: $hover-bg;
    transition: $hover-bg;
    &:hover {
      background: rgba(0, 0, 0, 0.95);
    }
    &:hover #img {
      transform: translateX(-10px);
    }
    &:hover .title {
      text-decoration: underline;
      transform: translateX(10px);
      opacity: 1!important;
      // color: #42b983!important;
    }
    .item-thumb {
      width: 168px;
      height: 119px;
      overflow: hidden;
      #img {
        transition: transform 0.25s linear;
        width: 220px;
      }
    }
    .item-body {
      flex: 1;
      height: 119px;
      margin-left: $margin-all;
      .title {
        letter-spacing: 1px;
        margin-top: 2.8px;
        color: white;
        opacity: 0.7;
        -webkit-transition: $hover-bg;
        -webkit-transition: $hover-bg;
        transition: $hover-bg;
        // &:hover {
        //   cursor: pointer;
        //   margin-left: 12px;
        //   color: #42b983;
        //   text-decoration: underline;
        // }
      }
    }
  }
}
</style>
