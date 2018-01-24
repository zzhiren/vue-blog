<template lang="pug">
  div#blog-list
    swiper.swiper(:options="swiperOption" ref="mySwiper")
        swiper-slide.swiper-slide(v-for="(item, index) in blogs.slice(0,10)" v-bind:key="index")
          img.swiper-img(v-bind:src="item.firstPic" alt="" v-bind:key="item._id" @click="_toBlogDetils(item._id)")
          div.title()  {{item.title}}
        div(class="swiper-pagination"  slot="pagination")
    div.blog
      div.blog-item(v-for="(item,index) in blogs" v-bind:key="item._id" @click="_toBlogDetils(item._id)")
          div.item-thumb
            img#img(v-bind:src="item.firstPic")
          div.item-body
              h4.title(v-html="item.title")
              p.preface(v-html="item.preface")
              div.meta 
                span
                  Icon.icon-font(type="ios-clock")
                  span.meta-span {{item.creationTime}}
                  //- Icon.icon-font(type="eye")
                  //- span.meta-span {{item.eyes}}
                  Icon.icon-font(type="chatbox-working")
                  span.meta-span {{item.comment}}
                  Icon.icon-font(type="heart")
                  span.meta-span {{item.love}}
                  Icon.icon-font(type="ios-pricetags")
                  span.meta-span
                    span.tag(v-for="(tag,index) in item.tag") {{tag}}
                      span(v-if="index != (item.tag.length-1)") /
      div.more(@click="_initData(state)") 
        span(v-show="state === 0") 或许有更多
        span(v-show="state === 1") 我也是有底线的

</template>
<script>
import axios from "axios";
import Footer from "../common/vue/Footer";

export default {
  name: "BlogList",
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        grabCursor: true,
        setWrapperSize: true,
        paginationClickable: false,
        mousewheelControl: false,
        pagination: ".swiper-pagination",
        observeParents: true,
        autoplayDisableOnInteraction: false
        // loop: true
      },
      blogs: [],
      page: 1,
      state: 0
    };
  },
  components: {
    Footer
  },
  mounted() {
    this._initData();
  },
  methods: {
    _more() {
      if (state === 0) {
        this._initData();
      }
    },
    _initData() {
      let date = new Date();
      let timer = date.getTime().toString();
      this.$axios({
        method: "get",
        url: "/getpostedblogs",
        params: {
          t: timer,
          page: this.page
        }
      }).then(res => {
        if (res.data.status == "已发布") {
          this.blogs.push(...res.data.data.slice(0, 10));
          this.page++;
          if (res.data.data.length < 11) {
            this.state = 1;
          }
        }
      });
    },
    _toBlogDetils(id) {
      this.$router.push({ name: "BlogDetails", params: { id } });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/components/common/scss/base.scss";

#blog-list {
  width: 595px;
  height: 100%;
  // min-height: calc(100vh - 14px - 63px);
  .swiper {
    width: 595px;
    height: 210px;
    position: relative;
    z-index: 1;
    background-color: $background-white;
    .swiper-slide {
      .swiper-img {
        width: 595px;
        transition: transform 0.5s linear;
        &:hover {
          cursor: pointer;
          transform: rotate(2deg) scale(1.1);
        }
      }
    }
    .title {
      height: 26px;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 1px;
      color: black;
      right: 21px;
      top: 16px;
      line-height: 25px;
      padding-left: 8px;
      padding-right: 8px;
      box-sizing: border-box;
      font-weight:500;
      font-family: Calibri,  sans-serif; 
      letter-spacing: 1px;
      font-size: 14px;
    }
  }
  .blog-item {
    width: 100%;
    height: 133px;
    margin-top: $margin-all;
    background-color: $background-white;
    padding: 7px 7px 7px 7px;
    box-sizing: border-box;
    display: flex;
    -webkit-transition: $hover-bg;
    transition: $hover-bg;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    &:hover #img {
      transform: translateX(-10px);
    }
    &:hover .title {
      text-decoration: underline;
      transform: translateX(10px);
      opacity: 1 !important;
    }
    .item-thumb {
      width: 168px;
      height: 119px;
      overflow: hidden;
      #img {
        transition: transform 0.25s linear;
        //
        height: 100%;
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
        color: black;
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
        // opacity: 0.9;
        &:hover {
          cursor: pointer;
        }
        .icon-font {
          font-size: 12px;
          margin-right: 6px;
          color: black !important;
          opacity: 0.7;
        }
        .meta-span {
          color: black;
          font-weight: 400;
          letter-spacing: 1px;
          margin-right: 25px;
          // font-family: "Asap", sans-serif;
          font-size: $blog-list-meta-font-size;
          .tag{
            font-size: 12px;
          }
        }
      }
    }
  }
  .more {
    width: 100%;
    height: 42px;
    background: $background-white;
    margin-top: 14px;
    text-align: center;
    line-height: 42px;
    letter-spacing: 1px;
    transition: background-color 0.25s linear;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
}
</style>
