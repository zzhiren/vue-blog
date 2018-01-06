<template lang="pug">
  div.blog
    div.content
      transition(name="fade" appear mode="out-in")
        keep-alive(include ="bloglist")
          router-view 
    div.right-side
      div.right-content
        div.search
          input.input(v-model="text" placeholder="Searching...")
          span.button(@click="_searchNPM()")
            Icon.icon-search(type="android-search")
        div.popularity
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
                a.a(v-bind:title="'author:' + item.package.publisher.username + '  version:'+item.package.version" v-bind:href="item.package.links.npm" target="_blank")
                  span.package-name {{item.package.name}} 
        div.tags(ref="tag")
          ul.items
            li.item(v-for="(item,index) in tags" @click="_toBlogListByTag(item.name,item.aliasName,item.icon,item.dsc)") 
              Icon.icon(v-if="item.icon != ''" v-bind:type="item.icon")
              //- img.vue(v-if="item.svg != ''" src="./../../assets/vue.svg" width="13")
              span(v-if="item.name !='vue'") {{item.aliasName}}
              span.vue(v-if="item.name == 'vue'")
              span(v-if="item.name == 'vue'") {{item.aliasName}}
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      value: "Vue",
      from: 0,
      npmList: [],
      animationClass: "",
      tags: [
        {
          name: "computer",
          aliasName: "计算机",
          icon: "android-laptop",
          dsc: "计算机 - 计算机的世界",
          svg: ""
        },
        {
          name: "network",
          aliasName: "网络",
          icon: "planet",
          dsc: "网络 - TCP/IP、HTTP、HTTPS、HTTP2",
          svg: ""
        },
        {
          name: "internet",
          aliasName: "互联网",
          icon: "ios-world-outline",
          dsc: "互联网 - 互联网+ 时代",
          svg: ""
        },
        {
          name: "algorithm",
          aliasName: "算法",
          icon: "ios-calculator-outline",
          dsc: "算法 - 核心动力",
          svg: ""
        },
        {
          name: "work",
          aliasName: "工作",
          icon: "document-text",
          dsc: "工作 - 我爱工作，工作是我快乐😭",
          svg: ""
        },
        {
          name: "life",
          aliasName: "生活",
          icon: "coffee",
          dsc: "生活 - 生、活单字无意，意在「生活」",
          svg: ""
        },
        {
          name: "think",
          aliasName: "思考",
          icon: "android-bulb",
          dsc: "思考 - 不要停止思考的脚步",
          svg: ""
        },
        {
          name: "WebDev",
          aliasName: "Web开发",
          icon: "earth",
          dsc: "Web开发 - World Wide Web",
          svg: ""
        },
        {
          name: "vue",
          aliasName: "Vue",
          icon: "",
          dsc: "Vue - LZ天下第一",
          svg: "./../../assets/vue.svg"
        },
        {
          name: "Nodejs",
          aliasName: "Nodejs",
          icon: "social-nodejs",
          dsc: "Nodejs - 感觉很Cool，但还不够~",
          svg: ""
        },
        {
          name: "JavaScript",
          aliasName: "JavaScript",
          icon: "social-javascript",
          dsc: "Javascript - 强大的工业语言",
          svg: ""
        },
        {
          name: "Git",
          aliasName: "Git",
          icon: "merge",
          dsc: "Git- Git学习之路",
          svg: ""
        },
        {
          name: "GitHub",
          aliasName: "GitHub",
          icon: "social-github",
          dsc: "GitHub- 又名GayHub(●ˇ∀ˇ●)",
          svg: ""
        },
        {
          name: "Chrome",
          aliasName: "Chrome",
          icon: "social-chrome",
          dsc: "Chrome - 世界上最好用的PC浏览器，没有之一",
          svg: ""
        },
        {
          name: "Http",
          aliasName: "Http",
          icon: "arrow-swap",
          dsc: "Http - Http、Https、HTTP2",
          svg: ""
        },
        {
          name: "HTML",
          aliasName: "HTML",
          icon: "social-html5",
          dsc: "HTML- HTML5、Pug、Xml...",
          svg: ""
        },
        {
          name: "CSS",
          aliasName: "CSS",
          icon: "social-css3",
          dsc: "Css - Css3、Sass、Less、Stylus、PostCss...",
          svg: ""
        },
        {
          name: "Linux",
          aliasName: "Linux",
          icon: "social-tux",
          dsc: "Linux - So Cool！",
          svg: ""
        },
        {
          name: "Python",
          aliasName: "Python",
          icon: "social-python",
          dsc: "Python - 嘶~嘶~斯内克😜",
          svg: ""
        }
      ]
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
    this._addEventListener()
  },
  methods: {
    _addEventListener(){
      document.addEventListener('scroll',this._setTagPosition)
    },
    _setTagPosition(){
      console.log(this.$refs.tag.offsetTop - document.documentElement.scrollTop)
      let h = this.$refs.tag.offsetTop - document.documentElement.scrollTop;
      // let h = 0;
      if(h == 78){
        this.$refs.tag.style.position = 'fixed';
        console.log('xxxxxxxxxxxxxxxxxx')
      }else{
        this.$refs.tag.style.position = 'relative';
      }
    },
    _initNpmData() {
      console.log('---------------')
      
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
    _searchNPM() {
      if (this.text == "") {
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
      } else {
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
    },
    _toBlogListByTag(name, aliasName, icon, dsc) {
      let tagAliasName = aliasName;
      let tagName = name;
      let tagIcon = icon;
      let tagDsc = dsc;
      let n = parseInt(Math.random() * 9);
      if (n == 0) {
        this.animationClass = "bounceInLeft";
        this._router(
          tagName,
          tagAliasName,
          tagIcon,
          tagDsc,
          this.animationClass
        );
      } else if (n == 1) {
        this.animationClass = "rollIn";
        this._router(
          tagName,
          tagAliasName,
          tagIcon,
          tagDsc,
          this.animationClass
        );
      } else if (n == 2) {
        this.animationClass = "rollOut";
        this._router(
          tagName,
          tagAliasName,
          tagIcon,
          tagDsc,
          this.animationClass
        );
      } else if (n == 3) {
        this.animationClass = "hinge";
        this._router(
          tagName,
          tagAliasName,
          tagIcon,
          tagDsc,
          this.animationClass
        );
      } else if (n == 4) {
        this.animationClass = "zoomInRight";
        this._router(
          tagName,
          tagAliasName,
          tagIcon,
          tagDsc,
          this.animationClass
        );
      } else if (n == 5) {
        this.animationClass = "zoomInLeft";
        this._router(
          tagName,
          tagAliasName,
          tagIcon,
          tagDsc,
          this.animationClass
        );
      } else if (n == 6) {
        this.animationClass = "flip";
        this._router(
          tagName,
          tagAliasName,
          tagIcon,
          tagDsc,
          this.animationClass
        );
      } else if (n == 7) {
        this.animationClass = "jackInTheBox";
        this._router(
          tagName,
          tagAliasName,
          tagIcon,
          tagDsc,
          this.animationClass
        );
      } else if (n == 8) {
        this.animationClass = "rubberBand";
        this._router(
          tagName,
          tagAliasName,
          tagIcon,
          tagDsc,
          this.animationClass
        );
      }
    },
    _router(name,aliasName, icon, dsc, animation) {
      let tagAliasName = aliasName;
      let tagName = name;
      let tagIcon = icon;
      let tagDsc = dsc;
      let animationClass = animation;
      this.$router.push({
        name: "BlogListByTag",
        params: { tagName, tagAliasName,tagIcon, tagDsc, animationClass }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/components/common/scss/base.scss";
$margin-top: 79px;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.blog {
  display: flex;
  .content {
    flex: 1;
  }
  .right-content {
    // position: fixed;
  }
  .right-side {
    margin-left: 14px;
    width: 266px;
    .search {
      width: 266px;
      display: flex;
      padding: 7px;
      box-sizing: border-box;
      background-color: $background-white;
      .input {
        background-color: hsla(0, 0%, 77%, 0.4);
        height: 28px;
        padding: 4px;
        box-sizing: border-box;
        flex: 1;
        outline-color: rgba(255, 255, 255, 0);
        border: 0 !important;
        transition: background-color 0.25s linear;
        caret-color: red;
        &::placeholder {
          color: #777;
        }
        &:hover {
          background-color: hsla(0, 0%, 57%, 0.4);
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
          color: #777;
        }
      }
    }
    .popularity {
      width: 266px;
      margin-top: 14px;
      box-sizing: border-box;
      background-color: $background-white;
      .title {
        height: 42px;
        border-bottom: 1px dashed rgba(200, 200, 200, 0.2);
        color: #777;
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
          width: 50px;
          .npm {
            margin-top: 12px;
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
          height: 292px;
          counter-reset: hot-article-list;
          .li {
            display: block;
            height: 18px;
            line-height: 18px;
            padding: 0 11px;
            margin-bottom: 10px;
            color: #555;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .index {
              counter-increment: hot-article-list;
              background-color: hsla(0, 0%, 77%, 0.4);
              width: 18px;
              height: 18px;
              line-height: 18px;
              display: inline-block;
              text-align: center;
              margin-right: 6px;
              color: #555;
              font-size: 12px;
              &::before {
                content: counter(hot-article-list);
                text-decoration-line: inherit;
                text-decoration-style: inherit;
                text-decoration-color: inherit;
                color: #777;
              }
            }
            .a {
              color: #555 !important;
              font-size: 13px;
              transition: margin-left 0.5s linear;
              &:hover {
                text-decoration: underline;
                margin-left: 10px;
                color: black !important;
              }
              .package-name {
                font-size: 14px;
              }
              .package-author {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    .tags {
      // position: fixed;
      background-color: $background-white;
      width: 100%;
      height: 358.6px;
      margin-top: 14px;
      padding: 10.66px;
      .items {
        width: 226px;
        .item {
          color: #555;
          height: 28px;
          background-color: hsla(0, 0%, 77%, 0.4);
          float: left;
          padding-left: 8px;
          padding-right: 8px;
          margin-right: 10.66px;
          margin-bottom: 10.66px;
          font-size: 14px;
          line-height: 28px;
          transition: background-color 0.5s linear;
          &:hover {
            background-color: hsla(0, 0%, 77%, 1);
            cursor: pointer;
          }
          .icon {
            margin-right: 5px;
          }
          .vue {
            margin-right: 5px;
            &::before {
              content: url(../../assets/tagvue.svg);
              display: inline-block;
              vertical-align: middle;
              margin-top: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
