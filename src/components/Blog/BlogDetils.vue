<template lang="pug">
  div.blog-detils
    h3.title(v-html="data.title")
    p(v-html="compiledMarkdown")
</template>
<script>
import axios from "axios";
import Marked from "marked";

export default {
  data() {
    return {
      data: "",
      content: ""
    };
  },
  computed: {
    compiledMarkdown() {
      return Marked(this.content);
    }
  },
  mounted() {
    this._initData();
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
    }
  }
};
</script>
<style lang="scss">
.blog-detils {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: white;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
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
    color: #e8e8e8 !important;
  }
  blockquote {
    border-left: 2px solid #b82525;
  }
  p {
    color: #abb2bf;
    margin-bottom: 10px !important;
  }
  blockquote > p {
    color: #3d96e9;
    /* color: #bc78cd; */
    padding-left: 8px !important;
    font-size: 14px;
    margin-top: 7px !important;
    // margin-bottom: 7px !important;
    background: rgba(0, 0, 0, 0.4);
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    height: 28px;
    line-height: 28px;
    font-family: Monaco, Consolas, Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  pre {
    // background: #21252b;
    background: rgba(0, 0, 0, 1);
    border-radius: 4px;
    padding: 7px 7px;
    box-sizing: border-box;
    font-family: Monaco, Consolas, Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 14px !important;
  }
  img{
    width: 100%;
    opacity: 0.9;
    margin-bottom: 10px;
  }
}
</style>
