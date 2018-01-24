<template lang="pug">
  div.blog-details
    div.mask(v-show="avatarListState" @click="_showAvatarList()")
    div.markdown
      h3.title(v-html="data.title")
      p(v-html="compiledMarkdown")
    div.comment
      div.tools
        div.total
          div.count 
            span.bold {{commentList.length}}
            span 条评论
          div.like(@click="_addLove()")
            div.icon(v-bind:class="{red: loveState == 1}")
              Icon.icon(type="android-favorite")
            div.count
              span.bold {{data.love}}
              span 人喜欢
        div.sort
          span.bold 最新
          span 最热
      div.list-box
        ul.comment-list
          transition(name="fade" v-for="(item,index) in commentList" v-bind:key="index")
            li.comment-item()
              div.cm-avatar
                img.cm-avatar-img(v-bind:src="item.avatarImg")
              div.cm-body
                div.cm-heaer
                  a.user-name(v-bind:href="item.userSite") {{item.userName}}
                  Icon.os-icon(v-if="item.OS.indexOf('Windows') != -1 " type="social-windows")
                  Icon.mac-icon(v-if="item.OS.indexOf('Mac') != -1 " type="social-apple")
                  Icon.mac-icon(v-if="item.OS.indexOf('Unix') != -1 " type="social-tux")
                  Icon.mac-icon(v-if="item.OS.indexOf('Linux') != -1 " type="social-tux")
                  span.user-os {{item.OS}}
                  Icon.os-icon(type="earth")
                  span.user-browser {{item.browser}}
                div.cm-content 
                  p(v-html="item.theComment")
                div.cm-footer
                  span {{item.creationTime}}
      div.post-box
        div.user
          div.container
            input.input(v-model="userName" placeholder="name*" @focus="_clearTip(0)")
            pop-tip(:tip="userNameTip" v-show="this.userNameTip != ''")
          div.container
            input.input(v-model="userEmail" placeholder="email*" type="email" @focus="_clearTip(1)")
            pop-tip(:tip="userEmailTip" v-show="this.userEmailTip != ''")
          div.container
            input.input.focus-blue(v-model="userSite" placeholder="site" )
            //- pop-tip(:tip="userSiteTip" v-show="this.userSiteTip != ''")
        div.editor-box
          div.user-avatar-img
            img.img(v-bind:src="avatarImg" @click="_showAvatarList()")
            transition(name="fade")
              div.avatar-list(v-show="avatarListState" v-cloak)
                div.avatar-items
                  transition-group#male.group(v-show="sexState == 0" name="fade" tag="div" ref="avatarItems")
                    div.avatar-item(@click="_selectAvatar(item)" v-for="(item,index) in male" v-bind:key="index")
                      img.avatar-img(v-bind:src="item")
                  transition-group#female.group(v-show="sexState == 1" name="fade" tag="div")
                    div.avatar-item(@click="_selectAvatar(item)" v-for="(item,index) in female" v-bind:key="index")
                      img.avatar-img(v-bind:src="item")
                div.btn
                  div.avatar-btn(@click="_chooseSex(0)" v-bind:class="{active: sexState == 0}")
                    Icon.icon.blue(type="male")
                  div.avatar-btn(@click="_chooseSex(1)" v-bind:class="{active: sexState == 1}")
                    Icon.icon.hot-pink.female(type="female")
          div.markdown-editor
            textarea.textarea(v-model="theComment" placeholder="show me your think" oninput="this.style.height = this.scrollHeight+'px'")
            div.editor-tools
              div.submit(@click="_submit()") 发布
</template>
<script>
import axios from "axios";
import Marked from "marked";
import default_avatar from "../../assets/default_avatar.png";
import PopTip from "../common/vue/PopTip";

export default {
  name:"BlogDetails",
  data() {
    return {
      data: "",
      content: "",
      OS: "",
      browser: "",
      userName: "",
      userEmail: "",
      userSite: "",
      userNameTip: "",
      userEmailTip: "",
      commentList: [],
      theComment: "",
      sexState: 0,
      male: [],
      female: [],
      avatarListState: false,
      avatarImg: default_avatar,
      loveState: 0
    };
  },
  computed: {
    compiledMarkdown() {
      return Marked(this.content);
    }
  },
  components: {
    PopTip
  },
  mounted() {
    if (localStorage[this.$route.params.id]) {
      this.loveState = 1;
    }
    this._getBlogDetails();
    this._getComments();
    this._clientOS();
    this._clientBrowser();
    this._getAvatarList();
    this._initGuestInformation();
  },
  methods: {
    // addLove
    _addLove() {
      let _id = this.$route.params.id;
      let date = new Date();
      let timer = date.getTime().toString();
      if (localStorage[_id]) {
      } else {
        this.$axios({
          method: "get",
          url: "/addlove",
          params: {
            _id: _id,
            t: timer
          }
        }).then(res => {
          if (res.data.status == 0) {
            localStorage[_id] = _id;
            this.data.love++;
            this.loveState = 1;
          }
        });
      }
    },
    // localstorage保存用户信息
    _initGuestInformation() {
      if (localStorage.userName) {
        this.userName = localStorage.userName;
      }
      if (localStorage.userEmail) {
        this.userEmail = localStorage.userEmail;
      }
      if (localStorage.userName) {
        this.userSite = localStorage.userSite;
      }
      if (localStorage.avatarImg) {
        this.avatarImg = localStorage.avatarImg;
      }
    },
    _saveGuestInformation() {
      localStorage.userName = this.userName;
      localStorage.userEmail = this.userEmail;
      localStorage.userSite = this.userSite;
      localStorage.avatarImg = this.avatarImg;
    },
    // 关闭提示
    _clearTip(value) {
      switch (value) {
        case 0:
          this.userNameTip = "";
          break;
        case 1:
          this.userEmailTip = "";
          break;
        default:
          break;
      }
    },
    // 发布评论
    _submit() {
      if (this.userName == "" || this.userName == null) {
        this.userNameTip = "( ) => { name != ' ' 😯 }";
      }
      if (this.userEmail == "" || this.userEmail == null) {
        this.userEmailTip = "( ) => { email格式不正确 😯 }";
      }
      if (this.theComment == "") {
        alert("请输入评论内容☺！");
      }
      if (this.userName != "" && this.userEmail != "" && this.theComment != "") {
        let myDate = new Date();
        let year = myDate.getFullYear();
        let month = myDate.getMonth() + 1;
        let day = myDate.getDate();
        let hours = myDate.getHours();
        let creationTime = "";
        if (hours <= 12) {
          creationTime = year + "/" + month + "/" + day + " " + "上午";
        } else if (hours > 12) {
          creationTime = year + "/" + month + "/" + day + " " + "下午";
        }
        this._saveGuestInformation();
        let obj = {
          id: this.$route.params.id,
          avatarImg: this.avatarImg,
          userName: this.userName,
          userEmail: this.userEmail,
          userSite: this.userSite,
          theComment: this.theComment,
          creationTime: creationTime,
          OS: this.OS,
          browser: this.browser
        };
        this.$axios({
          method: "post",
          url: "/addcomment",
          data: obj
        }).then(res => {
          if (res.data.status == 0) {
            this.commentList.push(obj);
            this.theComment = "";
          }
        });
      }
    },
    // 选择头像
    _selectAvatar(value) {
      this.avatarImg = value;
    },
    // 显示选择头像窗口
    _showAvatarList() {
      this.avatarListState = !this.avatarListState;
    },
    // 获取头像列表数据
    _getAvatarList() {
      let date = new Date();
      let timer = date.getTime().toString();
      this.$axios({
        method: "get",
        url: "/getavatarlist",
        params: {
          t: timer
        }
      }).then(res => {
        console.log(res.data.data);
        this.male = res.data.data[0].list.male;
        this.female = res.data.data[0].list.female;
      });
    },
    _chooseSex(value) {
      this.sexState = value;
      document.getElementById("male").scrollTop = 0;
      document.getElementById("female").scrollTop = 0;
    },
    _getBlogDetails() {
      this.$axios({
        method: "post",
        url: "/getblogdetils",
        data: {
          id: this.$route.params.id
        }
      }).then(res => {
        this.data = res.data.data;
        this.content = res.data.data.content;
      });
    },
    _getComments() {
      let date = new Date();
      let timer = date.getTime().toString();
      this.$axios({
        method: "get",
        url: "/getcomments",
        params: {
          id: this.$route.params.id,
          t: timer
        }
      }).then(res => {
        this.commentList = res.data.data;
      });
    },
    _clientOS() {
      let sUserAgent = navigator.userAgent;
      let isWin =
        navigator.platform == "Win32" || navigator.platform == "Windows";
      let isMac =
        navigator.platform == "Mac68K" ||
        navigator.platform == "MacPPC" ||
        navigator.platform == "Macintosh" ||
        navigator.platform == "MacIntel";
      if (isMac) {
        this.OS = "Mac OSX";
      }
      let isUnix = navigator.platform == "X11" && !isWin && !isMac;
      if (isUnix) {
        this.OS = "Unix";
      }
      let isLinux = String(navigator.platform).indexOf("Linux") > -1;
      if (isLinux) {
        this.OS = "Linux";
      }
      if (isWin) {
        let isWin7 =
          sUserAgent.indexOf("Windows NT 6.1") > -1 ||
          sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) {
          this.OS = "Windows 7";
        }
        let isWin10 =
          sUserAgent.indexOf("Windows NT 10.0") > -1 ||
          sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10) {
          this.OS = "Windows 10";
        }
      }
      return "other";
    },
    _clientBrowser() {
      let userAgent = navigator.userAgent;
      let isOpera = userAgent.indexOf("Opera") > -1;
      if (isOpera) {
        this.browser = "Opera";
      } else if (userAgent.indexOf("Firefox") > -1) {
        this.browser = "FF";
      } else if (userAgent.indexOf("Chrome") > -1) {
        this.browser = "Chrome";
      } else if (userAgent.indexOf("Safari") > -1) {
        this.browser = "Safari";
      } else if (
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

$bg: hsla(0, 0%, 77%, 0.3);
$hover-bg: hsla(0, 0%, 57%, 0.3);
$height: 24.48px;
[v-cloak] {
  display: none;
}
.mask {
  position: fixed;
  z-index: 10;
  width: 4000px;
  height: 3000px;
  left: -1000px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.blog-details {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  .comment {
    width: 595px;
    margin-top: 14px;
    background: $background-white;
    padding: 14px;
    position: relative;
    .bold {
      font-weight: bold;
      margin-right: 2px;
    }
    .tools {
      width: 100%;
      height: 39.46px;
      border-bottom: 1px solid rgba(197, 197, 197, 0.4);
      margin-bottom: 14px;
      .total {
        width: 200px;
        font-family: "Asap", sans-serif;
        float: left;
        display: flex;
        font-size: 13px;

        div {
          background-color: $bg;
          line-height: $height;
          height: $height;
          padding-left: 7px;
          padding-right: 7px;
          padding-top: 1px;
          color: #555;
        }

        .count {
          margin-right: 7px;
          transition: background-color 0.4s linear;
          &:hover {
            background-color: $hover-bg;
            cursor: pointer;
            color: black;
          }
        }
        .icon {
          line-height: 25px;
          font-size: 18px;
          padding-right: 2px;
          background-color: rgba(0, 0, 0, 0);
        }
        .like {
          display: flex;
          padding: 0;
          transition: background-color 0.4s linear;
          &:hover {
            background-color: $hover-bg;
            cursor: pointer;
            color: black;
          }
          .count {
            background-color: rgba(0, 0, 0, 0);
            padding: 0;
            padding-top: 1px !important;
          }
          .red {
            color: rgba(255, 0, 0, 0.8);
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
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
    .list-box {
      .comment-list {
        overflow: hidden;
        width: 100%;
        .comment-item {
          margin-bottom: 14px;
          position: relative;
          float: right;
          width: 546px;
          background-color: $bg;
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
            // border: 4px solid rgba(0, 0, 0, 0.2);
            border: 4px solid rgba(255, 255, 255, 0.8);
            .cm-avatar-img {
              width: 48px;
              height: 48px;
              transition: transform 0.3s linear;
              background: white;
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
              .user-name {
                font-weight: bold;
                font-family: "Asap", sans-serif;
                font-size: 14px;
                color: black;
              }
              .os-icon {
                margin-left: 11px;
                margin-right: 4px;
                font-size: 11px;
              }
              .mac-icon {
                margin-left: 11px;
                margin-right: 4px;
                font-size: 14px;
              }
              .user-os {
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
    .post-box {
      width: 100%;
      border-top: 1px dashed hsla(0, 0%, 47%, 0.4);
      padding-top: 10.66px;
      .user {
        width: 100%;
        height: 27.99px;
        margin-bottom: 10.66px;
        padding-left: 56.66px;
        display: flex;
        .container {
          width: 100%;
          margin-right: 14px;
          position: relative;
          flex: 1;
          &:last-child {
            margin-right: 0;
          }

          .input {
            color: #555;
            height: 100%;
            width: 100%;
            background-color: $bg;
            padding: 4px;
            padding-left: 8px;
            box-sizing: border-box;
            outline-color: rgba(255, 255, 255, 0);
            border: 0 !important;
            transition: background-color 0.25s linear;
            caret-color: red;
            &::placeholder {
              color: #777;
            }
            &:hover {
              background-color: $hover-bg;
            }

            &:focus {
              background-color: $hover-bg;
            }
          }
        }

        .focus-blue {
          caret-color: #0088f5 !important;
        }
      }
      .editor-box {
        width: 100%;
        display: flex;
        .user-avatar-img {
          width: 42.66px;
          height: 100%;
          margin-right: 14px;
          position: relative;
          .img {
            width: 42.66px;
            height: 42.66px;
          }
          .fade-enter-active,
          .fade-leave-active {
            transition: opacity 0.5s;
          }
          .fade-enter,
          .fade-leave-to {
            opacity: 0;
          }

          .avatar-list {
            width: 525px;
            height: 155px;
            z-index: 11;
            padding-right: 0 !important;
            max-height: 200px;
            display: flex;
            flex-direction: column;
            background: hsla(0, 0%, 87%, 0.9);
            position: absolute;
            top: -40px;
            left: 45px;
            @-webkit-keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            .avatar-items {
              display: flex;
              flex-wrap: wrap;
              margin-top: 7px;
              margin-left: 7px;
              // height: 100%;
              flex: 1;
              .group {
                width: 525px;
                display: flex;
                height: 118px;
                overflow-x: hidden;
                flex-wrap: wrap;
                // overflow:scroll;
                &::-webkit-scrollbar {
                  width: 4px;
                  height: 16px;
                  background: hsla(0, 0%, 77%, 0.9);
                  opacity: 1;
                }
                &::-webkit-scrollbar-track {
                  border-radius: 10px;
                  background: hsla(0, 0%, 77%, 0.9);
                  display: block;
                }
                &::-webkit-scrollbar-thumb {
                  border-radius: 10px;
                  background-color: black;
                  &:hover {
                    background-color: #0088f5;
                  }
                }
              }

              .avatar-item {
                animation: fadeIn 1s;
                $size: 50px;
                width: $size;
                height: $size;
                margin-right: 7px;
                margin-bottom: 7px;
                .avatar-img {
                  width: $size;
                  height: $size;
                }
              }
            }
            .btn {
              height: 30px;
              width: 100%;
              background: hsla(0, 0%, 77%, 0.9);
              bottom: 0;
              display: flex;
              .active {
                background: rgba(0, 0, 0, 0.3);
              }
              .female {
                font-size: 17px !important;
              }
              .avatar-btn {
                flex: 1;
                text-align: center;
                line-height: 35px;
                &:hover {
                  cursor: pointer;
                }
                .icon {
                  font-size: 15px;
                }
              }
            }
          }
        }
        .markdown-editor {
          flex: 1;
          height: 100%;
          background-color: $bg;
          .textarea {
            border: none;
            flex: 1;
            min-height: 80px;
            max-height: 200px;
            border-radius: 2px;
            resize: none;
            width: 100%;
            background-color: rgba(255, 255, 255, 0);
            outline-color: rgba(255, 255, 255, 0);
            padding: 10px;
            transition: background-color 0.25s linear;
            caret-color: red;
            font-size: 12px;
            color: #555;
            &:hover {
              background-color: hsla(0, 0%, 77%, 0.1);
            }
            &::placeholder {
              color: #777;
            }
          }
          .editor-tools {
            width: 100%;
            height: 28px;
            background-color: $bg;
            margin-top: -4px;
            .submit {
              width: 98px;
              background-color: hsla(0, 0%, 77%, 0.7);
              height: 100%;
              float: right;
              text-align: center;
              line-height: 30px;
              letter-spacing: 3px;
              outline-width: 0;
              font-size: 14px;
              border: none;
              border-radius: 0;
              transition: background-color 0.2s linear;
              &:hover {
                background-color: hsla(0, 0%, 69%, 0.8);
                cursor: pointer;
              }
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
    word-wrap: break-word;
    word-break: break-all;
  }
  blockquote > p {
    color: #42b983;
    padding-left: 8px !important;
    font-size: 14px;
    margin-top: 14px !important; 
    background: $bg;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    line-height: 28px;
    font-family: Monaco, Consolas, Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  pre {
    background: $bg;
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
  a {
    margin-bottom: 10px !important;
    color: #ff69b4;
    text-decoration: underline;
  }
}
</style>
