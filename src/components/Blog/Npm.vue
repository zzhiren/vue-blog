<template lang="pug">
  div.npm
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
        ul.ul(v-if="npmList.length > 0")
          li.li(v-for="(item,index) in npmList" v-bind:key="index")
            span.index
            a.a(v-bind:title="'author:' + item.package.publisher.username + '  version:'+item.package.version" v-bind:href="item.package.links.npm" target="_blank")
              span.package-name {{item.package.name}}
        ul.ul(v-if="state == 0")
          li.li
            span.index
            span.package-name.loading.one  1
          li.li
            span.index
            span.package-name.loading.two  1
          li.li
            span.index
            span.package-name.loading.three  1
          li.li
            span.index
            span.package-name.loading.one  1
          li.li
            span.index
            span.package-name.loading.two  1
          li.li
            span.index
            span.package-name.loading.three  1
          li.li
            span.index
            span.package-name.loading.one  1
          li.li
            span.index
            span.package-name.loading.two  1
          li.li
            span.index
            span.package-name.loading.three  1
          li.li
            span.index
            span.package-name.loading.one  1
</template>
<script>
export default {
  name: "npm",
  data() {
    return {
      text: "",
      value: "Vue",
      from: 0,
      npmList: [],
      state: 0
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
        this.state = 1;
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

.npm {
  width: 266px;
  // margin-top: 14px;
  box-sizing: border-box;
  // background-color: $background-white;

  .search {
    width: 266px;
    display: flex;
    padding: 7px;
    box-sizing: border-box;
    background-color: $background-white;
    margin-bottom: 14px;
    .input {
      background-color: hsla(0, 0%, 77%, 0.4);
      height: 28px;
      padding: 4px;
      padding-left: 8px;
      box-sizing: border-box;
      flex: 1;
      outline-color: rgba(255, 255, 255, 0);
      border: 0 !important;
      transition: background-color 0.25s linear;
      caret-color: $font-color-blue;
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
    // margin-top: 14px;
    box-sizing: border-box;
    background-color: $background-white;
  }
  @keyframes one {
    from {
      width: 80px;
    }
    to {
      width: 200px;
    }
  }
  @keyframes two {
    from {
      width: 190px;
    }
    to {
      width: 80px;
    }
  }
  @keyframes three {
    from {
      width: 60px;
    }
    to {
      width: 200px;
    }
  }
  .one {
    animation-fill-mode: initial;
    animation: one 0.6s infinite linear;
    animation-direction: alternate;
  }
  .two {
    animation-fill-mode: initial;
    animation: two 0.5s infinite linear;
    animation-direction: alternate;
  }
  .three {
    animation-fill-mode: initial;
    animation: three 1s infinite linear;
    animation-direction: alternate;
  }
  .loading {
    background: #e7e7e7;
    opacity: 0.8;
    width: 20px;
    // height: 20px;
    color: rgba(200, 200, 200, 0);
    display: inline-block;
    // margin: 0 auto;
    border-radius: 3px;
  }
  .title {
    height: 42px;
    border-bottom: 1px dashed rgba(200, 200, 200, 0.2);
    color: #777;
    display: flex;
    line-height: 42px;
    font-size: 14px;
    // text-align: center;
    padding-left: 10px;
    letter-spacing: 1px;
    overflow: hidden;
    font-family: "Microsoft YaHei",
      "\\5FAE软雅黑", sans-serif;
    font-weight: bold;
    .npm-div {
      width: 50px;
      .npm {
        margin-top: 12px;
        width: 100%;
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
</style>


