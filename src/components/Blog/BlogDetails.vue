<template lang="pug">
  div.blog-details
    div.markdown
      h3.title(v-html="data.title")
      p(v-html="compiledMarkdown")
    //- div.share
    //-   div.share-item.hover-deepgreen
    //-     span.icon
    //-       img(src="../../assets/wechat.svg")
    div.comment
      div.tools
        div.total
          div.count 条评论
          div.like
            div.icon
              Icon.icon(type="android-favorite")
            div.count
              span 4人喜欢
        div.sort
          span 最新
          span 最热
      div.list-box
        ul.comment-list
          li.comment-item
            div.cm-avatar
              img.cm-avatar-img(src="../../assets/me960x960.jpg")
            div.cm-body
              div.cm-heaer
                a.user-name() Zzhiren
                Icon.os-icon(type="social-windows")
                //- Icon(type="social-apple")
                span.user-os Windows 10
                Icon.os-icon(type="earth")
                span.user-browser Chrome
              div.cm-content 
                p 我再使用富文本编辑器vue-quill-editor的时候， 使用图片上传发现它是把图片转为base后插在文本中， 然后我直接是提交了，但发现太大了在查询的时候很慢。我再使用富文本编辑器vue-quill-editor的时候， 使用图片上传发现它是把图片转为base后插在文本中， 然后我直接是提交了，但发现太大了在查询的时候很慢。
              div.cm-footer
                span 2018/01/01 下午
        div.post-box
          
</template>
<script>
import axios from "axios";
import Marked from "marked";

export default {
  data() {
    return {
      data: "",
      content: "",
      os: "",
      browser: ""
    };
  },
  computed: {
    compiledMarkdown() {
      return Marked(this.content);
    }
  },
  mounted() {
    this._initData();
    this._clientOS();
    this._clientBrowser();
  },
  methods: {
    _initData() {
      this.$axios({
        method: "post",
        url: "/getblogdetils",
        data: {
          id: this.$route.params.id
        }
      }).then(res => {
        this.data = res.data.data;
        this.content = res.data.data.content;
        console.log(res.data.data);
      });
    },
    _clientOS() {
      var sUserAgent = navigator.userAgent;
      var isWin =
        navigator.platform == "Win32" || navigator.platform == "Windows";
      var isMac =
        navigator.platform == "Mac68K" ||
        navigator.platform == "MacPPC" ||
        navigator.platform == "Macintosh" ||
        navigator.platform == "MacIntel";
      if (isMac) {
        this.os = "Mac OSX";
      }
      let isUnix = navigator.platform == "X11" && !isWin && !isMac;
      if (isUnix) {
        this.os = "Unix";
      }
      let isLinux = String(navigator.platform).indexOf("Linux") > -1;
      if (isLinux) {
        this.os = "Linux";
      }
      if (isWin) {
        let isWin7 =
          sUserAgent.indexOf("Windows NT 6.1") > -1 ||
          sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) {
          this.os = "Windows 7";
        }
        let isWin10 =
          sUserAgent.indexOf("Windows NT 10.0") > -1 ||
          sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10) {
          this.os = "Windows 10";
        }
      }
      return "other";
    },
    _clientBrowser() {
      let userAgent = navigator.userAgent;
      let isOpera = userAgent.indexOf("Opera") > -1;
      if (isOpera) {
        this.browser = "Opera";
      }
      if (userAgent.indexOf("Firefox") > -1) {
        this.browser = "FF";
      }
      if (userAgent.indexOf("Chrome") > -1) {
        this.browser = "Chrome";
      }
      if (userAgent.indexOf("Safari") > -1) {
        this.browser = "Safari";
      }
      if (
        userAgent.indexOf("compatible") > -1 &&
        userAgent.indexOf("MSIE") > -1 &&
        !isOpera
      ) {
        this.browser = "IE";
      }
    }
  }
};
</script>
<style lang="scss">
@import "src/components/common/scss/base.scss";

$height: 24.48px;

.blog-details {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  .comment {
    width: 595px;
    height: 600px;
    margin-top: 14px;
    background: $background-white;
    padding: 14px;
    .tools {
      width: 100%;
      height: 39.46px;
      // background: red;
      border-bottom: 1px solid rgba(197, 197, 197, 0.4);
      margin-bottom: 14px;
      .total {
        width: 200px;
        height: $height;
        font-family: "Asap", sans-serif;
        float: left;
        display: flex;
        font-size: 13px;

        div {
          background-color: rgba(0, 0, 0, 0.1);
          height: $height;
          line-height: $height;
          padding-left: 7px;
          padding-right: 7px;
          color: #555;
        }
        .count {
          margin-right: 7px;
          transition: background-color 0.4s linear;
          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
            cursor: pointer;
            color: black;
          }
        }
        .icon {
          line-height: 26px;
          font-size: 16px;
          padding-right: 2px;
          background-color: rgba(0, 0, 0, 0);
        }
        .like {
          display: flex;
          padding: 0;
          transition: background-color 0.4s linear;
          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
            cursor: pointer;
            color: black;
          }
          .count {
            background-color: rgba(0, 0, 0, 0);
            padding: 0;
          }
        }
      }
      .sort {
        width: 100px;
        height: $height;
        line-height: $height;
        text-align: right;
        float: right;
        span {
          margin-left: 14px;
          font-size: 14px;
        }
      }
    }
    .list-box {
      // width: 595px;
      .comment-list {
        width: 100%;
        .comment-item {
          position: relative;
          float: right;
          width: 546px;
          // height: 154px;
          background-color: rgba(0, 0, 0, 0.1);
          padding-left: 21px;
          padding-top: 8.4px;
          padding-bottom: 8.4px;
          padding-right: 8.4px;
          transition: background-color 0.3s linear;
          &:hover .cm-avatar-img {
            transform: rotate(360deg);
          }
          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
          }
          .cm-avatar {
            position: absolute;
            width: 56px;
            height: 56px;
            top: 18px;
            left: -20px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            .cm-avatar-img {
              width: 48px;
              height: 48px;
              transition: transform 0.3s linear;
            }
          }
          .cm-body {
            float: right;
            width: 492.85px;
            display: flex;
            flex-direction: column;
            .cm-heaer {
              color: rgba(0, 0, 0, 0.38);
              height: 18.89px;
              width: 492.85px;
              margin-bottom: 6px;
              // background: white;
              .user-name {
                font-weight: bold;
                font-family: "Asap", sans-serif;
                font-size: 14px;
                color: black;
              }
              .os-icon {
                margin-left: 11px;
                margin-right: 4px;
                font-size: 12px;
              }
              .user-os {
                // margin-right: 11px;
                font-size: 12px;
              }
            }
            .cm-content {
              min-height: 40px;
              width: 100%;
              word-wrap: break-word;
              overflow: hidden;
              p {
                line-height: 25px;
                font-size: 13px;
                color: #555;
              }
            }
            .cm-footer {
              height: 15.56px;
              text-align: right;
              color: rgba(0, 0, 0, 0.38);
            }
          }
        }
      }
    }
  }
}

.share {
  margin-top: 14px;
  widht: 595px;
  height: 53.17px;
  background-color: $background-white;
  padding: 11.2px;
  display: flex;
  .share-item {
    width: 42px;
    height: 100%;
    // background: red;
    margin-right: 6.23px;
    &:last-child {
      margin-right: 0;
    }
    .icon {
      color: red !important;
    }
  }
}
.markdown {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: black;
  width: 595px;
  background-color: $background-white;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  box-sizing: border-box;
  .title {
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: Monaco, Consolas, Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: black !important;
    opacity: 0.9;
    line-height: 40px;
  }
  blockquote {
    p {
      border-left: 2px solid #3d96e9;
    }
  }
  p {
    color: #abb2bf;
    margin-bottom: 10px !important;
    // border-left: 2px solid #3d96e9;
  }
  blockquote > p {
    color: #42b983;
    /* color: #bc78cd; */
    padding-left: 8px !important;
    font-size: 14px;
    margin-top: 14px !important;
    // margin-bottom: 7px !important;
    background: rgba(0, 0, 0, 0.1);
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    height: 28px;
    line-height: 28px;
    font-family: Monaco, Consolas, Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  pre {
    // background: #21252b;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 7px 7px;
    box-sizing: border-box;
    font-family: Monaco, Consolas, Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 14px !important;
    overflow: hidden;
    width: inherit;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 5px;
      height: 7px;
      background-color: white;
      opacity: 1;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px white;
      border-radius: 10px;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
      background-color: rgba(150, 150, 150, 0.8);
      &:hover {
        background-color: #0088f5;
      }
    }
    code {
      width: 100%;
      color: black !important;
      opacity: 0.8;
      overflow-y: hidden;
    }
  }
  img {
    width: 100%;
    opacity: 0.9;
    margin-bottom: 10px;
  }
}
</style>
