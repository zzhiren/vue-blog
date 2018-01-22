<template lang="pug">
  div.topheader
    div.content
        div.my-name ZZHIREN
        div.motto To improve is to change; to be perfect is to change often！
</template>
<script>
export default {};
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
      font-family: "Asap";
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
      opacity: .9;
      line-height: $height;
      float: left;
    }
  }
}
</style>
