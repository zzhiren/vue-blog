<template lang="pug">
  div.topheader
    div.content
        div.my-name(@click="_home()") ZZHIREN
        div.motto To improve is to change; to be perfect is to change often！
</template>
<script>
export default {
  methods:{
    _home(){
      this.$router.push({
        name:"Blog"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/components/common/scss/base.scss";
$height: 63px;
.topheader {
  width: 100%;
  position: fixed;
  background-color: $background-white;
  z-index: 999;
  .content {
    width: $width;
    height: $height;
    margin: $margin-auto;
    color: #0088f5;
    .my-name {
      line-height: $height;
      font-size: 28px;
      font-weight: 500;
      font-family: 'Exo 2', sans-serif;
      -moz-user-select: none;
      -khtml-user-select: none;
      user-select: none;
      cursor: pointer;
      float: left;
      &::before {
        content: url(../../../assets/code.svg);
        vertical-align: middle;
        display: inline-block;
        margin-top: -6px;
        line-height: 10px;
        margin-right: 8px;
        margin-left: 4px;
      }
    }
    .motto {
      font-size: 14px;
      margin-left: 40px;
      letter-spacing: 0.5px;
      opacity: 1;
      line-height: $height;
      float: left;
    }
  }
}
</style>
