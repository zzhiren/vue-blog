<template lang="pug">
  div.blog
    div.content
      transition(name="fade" appear mode="out-in")
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
        div.tags
          ul.items
            li.item(v-for="(item,index) in tags") 
              Icon.icon(v-if="item.icon != ''" v-bind:type="item.icon")
              //- img.vue(v-if="item.svg != ''" src="./../../assets/vue.svg" width="13")
              span(v-if="item.name !='Vue'") {{item.name}}
              span.vue(v-if="item.name == 'Vue'")
              span(v-if="item.name == 'Vue'") {{item.name}}
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      xxx: "ios-monitor",
      text: "",
      value: "Vue",
      from: 0,
      npmList: [],
      tags: [
        {
          'name':'计算机',
          'icon': 'android-laptop',
          'svg':''
        },
        {
          'name':'网络',
          'icon': 'planet',
          'svg':''

        },
        {
          'name':'互联网',
          'icon': 'ios-world-outline',
          'svg':''
        },
        {
          'name':'算法',
          'icon': 'ios-calculator-outline',
          'svg':''
        },
        {
          'name':'工作',
          'icon': 'document-text',
          'svg':''
        },
        {
          'name':'生活',
          'icon': 'coffee',
          'svg':''
        },
        {
          'name':'思考',
          'icon': 'android-bulb',
          'svg':''
        },
        {
          'name':'Web开发',
          'icon': 'earth',
          'svg':''
        },
        {
          'name':'Vue',
          'icon': '',
          'svg' : './../../assets/vue.svg'
        },
        {
          'name':'Nodejs',
          'icon': 'social-nodejs',
          'svg':''
        },
        {
          'name':'JavaScript',
          'icon': 'social-javascript',
          'svg':''
        },
        {
          'name':'Git',
          'icon': 'merge',
          'svg':''
        },
        {
          'name':'GitHub',
          'icon': 'social-github',
          'svg':''
        },
        {
          'name':'Chrome',
          'icon': 'social-chrome',
          'svg':''
        },
        {
          'name':'Http',
          'icon': 'arrow-swap',
          'svg':''
        },
        {
          'name':'HTML',
          'icon': 'social-html5',
          'svg':''
        },
        {
          'name':'CSS',
          'icon': 'social-css3',
          'svg':''
        },
        {
          'name':'Linux',
          'icon': 'social-tux',
          'svg':''
        },
        {
          'name':'Python',
          'icon': 'social-python',
          'svg':''
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
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
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
    position: fixed;
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
          &:hover{
            background-color: hsla(0, 0%, 77%, 1);
            cursor: pointer;
          }
          .icon{
            margin-right: 5px;
          }
          .vue{
            margin-right: 5px;
            &::before{
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
