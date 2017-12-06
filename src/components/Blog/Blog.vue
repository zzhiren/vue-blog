<template lang="pug">
  div.blog
    div.content
      router-view
    div.right-side
      div.search
        input.input(v-model="value" placeholder="Searching...")
        span.button(@click="_searchBlog()")
          Icon.icon-search(type="android-search")
      div.popularity()
        div.title
        div.list

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    _searchBlog() {
      this.$axios({
        method: "get",
        url: "https://www.npmjs.com/-/search?text=vue&from=0&size=10&quality=1.95&popularity=3.3&maintenance=2.05",
        // url: "/searchblog",
        // query: {
        //   q: 'vue'
        // }
      }).then(res => {
        
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
          background-color: hsla(0, 0%, 77%, 0.4);
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
    .popularity{
      position: fixed;
      width: 266px;
      // padding: 7px;
      height: 100px;
      margin-top: 56px;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.8);
      .title{
        height: 42px;
        border-bottom: 1px dashed rgba(17, 17, 17, .3);
      }
    }
  }
}
</style>
