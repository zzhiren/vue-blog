<template lang="pug">
  div#blog-list
    div.header
      p.logo
        Icon.icon(v-bind:class="[animationClass]" v-if="tag.name != 'x'" v-bind:type="tag.icon")
        img.icon.vue(v-bind:class="[animationClass]" v-if="tag.name == 'vue'" src="../../assets/vue.svg" width="90")
      span.title(v-bind:class="[animationClass]" v-if="tag.name != 'x'") {{tag.dsc}}
    div.content
      transition-group(name="fade" mode="out-in" tag="p")
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
      div.empty(v-if="result == 1") No Result Article.
      div.more(v-if="blogs.length > 0" @click="_more(state)") 
        span(v-show="state === 0") 或许有更多
        span(v-show="state === 1") 我也是有底线的
      
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Tag",
  data() {
    return {
      animationClass: "",
      blogs: [],
      page: 1,
      state: 1,
      tag: {},
      result: 0
    };
  },
  mounted() {
    this._initData();
    this._initTagData();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.result = 0;
    this._initData();
    this._initTagData();
  },
  computed: {
    ...mapGetters(["tagName"])
  },
  methods: {
    _more(state) {
      if (state === 0) {
        this.page++;
        let date = new Date();
        let timer = date.getTime().toString();
        this.$axios({
          method: "get",
          url: "/getpostedblogsbytag",
          params: {
            t: timer,
            page: this.page,
            tag: this.tagName
          }
        }).then(res => {
          if (res.data.status == "已发布") {
            this.blogs.push(...res.data.data);
            if (res.data.data.length < 11) {
              this.state = 1;
            }
          }
        });
      }
    },
    _initTagData() {
      this.$axios({
        method: "get",
        url: "/gettag",
        params: {
          name: this.$route.params.tagName
        }
      }).then(res => {
        // this.tag = res.data.data[0]
        setTimeout(() => {
          this.tag = res.data.data[0];
        }, 1);
      });
    },
    _initData() {
      this.tagName = "x";
      // this.tagIcon = this.$route.params.tagIcon;
      // this.animationClass = this.$route.params.animationClass;
      let n = parseInt(Math.random() * 9);
      switch (n) {
        case 0:
          this.animationClass = "bounceInLeft";
          break;
        case 1:
          this.animationClass = "rollIn";
          break;
        case 2:
          this.animationClass = "rollOut";
          break;
        case 3:
          this.animationClass = "hinge";
          break;
        case 4:
          this.animationClass = "zoomInRight";
          break;
        case 5:
          this.animationClass = "zoomInLeft";
          break;
        case 6:
          this.animationClass = "flip";
          break;
        case 7:
          this.animationClass = "jackInTheBox";
          break;
        case 8:
          this.animationClass = "rubberBand";
          break;
      }
      let tag = this.$route.params.tagAliasName;

      let date = new Date();
      let timer = date.getTime().toString();
      this.$axios({
        method: "get",
        url: "/getpostedblogsbytag",
        params: {
          t: timer,
          page: 1,
          tag: this.tagName
        }
      }).then(res => {
        if (res.data.status == "已发布") {
          if (res.data.data.length == 0) {
            this.result = 1;
          }
          this.blogs = [];
          setTimeout(() => {
            this.blogs = res.data.data.slice(0, 10);
          }, 500);

          if (res.data.data.length < 11) {
            this.state = 1;
          } else {
            this.state = 0;
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
@keyframes jackInTheBox {
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
@-webkit-keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
@-webkit-keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@-webkit-keyframes rollOut {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.jackInTheBox {
  animation: jackInTheBox 1s linear infinite;
}
.rubberBand {
  animation: rubberBand 1s linear infinite;
}
.bounceInLeft {
  animation: bounceInLeft 1s linear infinite;
}
.rollIn {
  animation: rollIn 0.8s linear infinite;
}
.rollOut {
  animation: rollOut 0.8s linear infinite;
}
.hinge {
  animation: hinge 3s linear infinite;
}
.zoomInRight {
  animation: zoomInRight 1s linear infinite;
}
.zoomInLeft {
  animation: zoomInLeft 1.5s linear infinite;
}
.flip {
  animation: flip 1.5s linear infinite;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#blog-list {
  width: 100%;
  height: 100%;

  .header {
    width: 595px;
    height: 184px;
    background: $background-white;
    padding: 14px;
    text-align: center;
    .logo {
      height: 117px;
      margin-bottom: 16.8px;
      .icon {
        font-size: 100px;
        line-height: 117px;
        animation-iteration-count: 1;
      }
      .vue {
        margin-top: 15px;
      }
    }
    .title {
      animation-iteration-count: 1;
      display: inline-block;
      color: #555;
      font-size: 14px;
      font-weight: 600;
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
          .tag {
            font-size: 12px;
          }
        }
      }
    }
  }
  .content {
    position: relative;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .empty {
    position: absolute;
    width: 595px;
    height: 70px;
    background: $background-white;
    line-height: 70px;
    text-align: center;
    margin-top: 14px;
    font-size: 14px;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #555;
    animation: fadeIn 0.5s linear;
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
