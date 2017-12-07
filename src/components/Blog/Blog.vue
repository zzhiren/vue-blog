<template lang="pug">
  div.blog
    div.content
      router-view
    div.right-side
      div.search
        input.input(v-model="text" placeholder="Searching...")
        span.button(@click="_searchBlog()")
          Icon.icon-search(type="android-search")
      div.popularity()
        div.title 
          div.npm-div
            svg.npm(viewBox="0 0 18 7" data-reactid="9")
              path(fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6" data-reactid="10")
              path(fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4" data-reactid="11")
          span.span Build amazing things!
        div.list
          ul.ul
            li.li(v-for="(item,index) in npmList" v-bind:key="index")
              span.index
              a.a 
                span.package-name {{item.package.name}} 
                //- span.package-author ->{{item.package.publisher.username}}


          

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      text: "",
      value: "Vue",
      from: 0,
      npmList: []
    };
  },
  computed: {
    _value() {
      if (this.text == "") {
        return this.value;
      } else {
        return this.text;
      }
    }
  },
  mounted() {
    this._initNpmData();
  },
  methods: {
    _initNpmData() {
      this.$axios({
        method: "get",
        url: "/searchnpm",
        params: {
          text: "vue",
          from: this.from
        }
      }).then(res => {
        this.npmList = res.data.objects;
      });
    },
    _searchBlog() {
      this.$axios({
        method: "get",
        url: "/searchnpm",
        params: {
          text: this.text,
          from: this.from
        }
      }).then(res => {
        this.npmList = res.data.objects;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$margin-top: 79px;
.blog {
  display: flex;
  .content {
    flex: 1;
  }
  .right-side {
    margin-left: 14px;
    width: 266px;
    .search {
      position: fixed;
      width: 266px;
      // height: 100px;
      display: flex;
      padding: 7px;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.8);
      .input {
        background-color: hsla(0, 0%, 77%, 0.4);
        height: 28px;
        padding: 4px;
        box-sizing: border-box;
        flex: 1;
        border: 0 !important;
        transition: background-color 0.25s linear;
        caret-color: red;
        &::placeholder {
          color: rgba(0, 0, 0, 0.7);
        }
        &:hover {
          background-color: hsla(0, 0%, 57%, 0.4);
        }
        &:focus {
          outline-color: rgba(0, 0, 0, 0.8);
        }
      }
      .button {
        width: 28px;
        height: 28px;
        background-color: hsla(0, 0%, 57%, 0.4);
        text-align: center;
        &:hover {
          cursor: pointer;
        }
        .icon-search {
          font-size: 16px;
          line-height: 28px;
          color: black;
        }
      }
    }
    .popularity {
      position: fixed;
      width: 266px;
      // padding: 7px;
      // height: 100px;
      margin-top: 56px;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.8);
      .title {
        height: 42px;
        border-bottom: 1px dashed rgba(17, 17, 17, 0.3);
        color: white;
        display: flex;
        line-height: 42px;
        font-size: 15px;
        // text-align: center;
        padding-left: 10px;
        letter-spacing: 1px;
        overflow: hidden;
        font-family: DINRegular, -apple-system, BlinkMacSystemFont,
          "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI",
          "Microsoft YaHei", "\\5FAE软雅黑", sans-serif;
        font-weight: bold;
        .npm-div {
          width: 60px;
          .npm {
            // flex:
            // width: 60px;
            margin-top: 10px;
          }
        }
        .span {
          flex: 1;
          margin-left: 10px;
        }

        .value {
          color: #0088f5;
        }
      }
      .list {
        
        .ul {
          list-style: none;
          padding: 6px 0;
          margin-bottom: 0;
          counter-reset: hot-article-list;
          .li {
            display: block;
            height: 18px;
            line-height: 18px;
            padding: 0 11px;
            margin-bottom: 10px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .index {
              counter-increment: hot-article-list;
              background-color: hsla(0, 0%, 57%, 0.4);
              width: 18px;
              height: 18px;
              line-height: 18px;
              display: inline-block;
              text-align: center;
              margin-right: 6px;
              color: white;
              font-size: 12px;
              &::before {
                content: counter(hot-article-list);
              }
            }
            .a {
              color: rgba(255, 255, 255, 0.5) !important;
              font-size: 13px;
              transition: margin-left 0.5s linear;
              &:hover {
                text-decoration: underline;
                margin-left: 10px;
              }
              .package-name{
                font-size: 14px;
                color: rgba(255, 255, 255, 1) !important;
              }
              .package-author{
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
