<template lang="pug">
  div.blog
    div.content
      router-view
    div.right-side
      div.search
        input.input(placeholder="Searching...")
        span.button
          Icon.icon-search(type="android-search")
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
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
    // position: fixed;
    margin-left: 14px;
    // margin-top: $margin-top;
    width: 266px;
    height: 100px;
    .search {
      position: fixed;
      width: 266px;
      height: 100px;
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
          color: black;
        }
        &:hover {
          background-color: hsla(0, 0%, 57%, 0.4);
          // background: red;
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
  }
}
</style>
