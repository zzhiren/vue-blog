<template lang="pug">
  div#blog-list
    swiper.swiper(:options="swiperOption" ref="mySwiper")
        swiper-slide.swiper-slide(v-for="(item, index) in blogs.slice(0,4)" v-bind:key="index")
          img.swiper-img(v-bind:src="item.firstPic" alt="" v-bind:key="item._id" @click="_toBlogDetils(item._id)")
          div.title()  {{ item.title}}
    div
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
                  Icon.icon-font(type="eye")
                  span.meta-span {{item.eyes}}
                  Icon.icon-font(type="chatbox-working")
                  span.meta-span {{item.comment.length}}
                  Icon.icon-font(type="heart")
                  span.meta-span {{item.love}}
                  Icon.icon-font(type="ios-pricetags")
                  span.meta-span {{item.tag[0]}}
      div.more(@click="_initData(state)") 
        span(v-show="state === 0") 或许有更多
        span(v-show="state === 1") 我也是有底线的
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        grabCursor: true,
        setWrapperSize: true,
        paginationClickable: false,
        mousewheelControl: false,
        observeParents: true,
        autoplayDisableOnInteraction: false
        // loop: true
      },
      blogs: [],
      page: 1,
      state: 0
    };
  },
  mounted() {
    this._initData();
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    _more(){
      if (state === 0) {
        this._initData()
      }
    },
    _initData() {
      var date = new Date();
        var timer = date.getTime().toString();
        this.$axios({
          method: "get",
          url: "/getpostedblogs",
          params: {
            t: timer,
            page: this.page
          }
        }).then(res => {
          if (res.data.status == "已发布") {
            this.blogs.push(...res.data.data);
            this.page++;
            if(res.data.data.length < 10){
              this.state = 1
            }
          }
        });
    },
    _toBlogDetils(id) {
      this.$router.push({ name: "BlogDetils", params: { id } });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/components/common/scss/base.scss";
#blog-list {
  width: 100%;
  height: 100%;
  .swiper {
    width: 595px;
    height: 210px;
    position: relative;
    z-index: 1;
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
      height: 28px;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 1px;
      color: black;
      right: 21px;
      top: 16px;
      line-height: 28px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
      font-family: DINRegular;
    }
  }
  .blog-item {
    width: 100%;
    height: 133px;
    margin-top: $margin-all;
    background-color: $background-white;
    // background: rgba(0, 0, 0, 0.8);
    // background: rgba(28, 28, 28, .9);
    padding: 7px 7px 7px 7px;
    box-sizing: border-box;
    display: flex;
    -webkit-transition: $hover-bg;
    transition: $hover-bg;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      // background: rgba(0, 0, 0, 0.9);
      cursor: pointer;
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
        opacity: $blog-list-meta-font-opacity;
        &:hover {
          cursor: pointer;
        }
        .icon-font {
          font-size: $iconfont-size;
          margin-right: 4px;
          color: black !important;
          opacity: 0.7;
        }
        .meta-span {
          color: black;
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
      // background: rgba(0, 0, 0, 0.9);
      cursor: pointer;
    }
  }
}
</style>
