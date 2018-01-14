<template lang="pug">
  div.poptip
    div.arrow
    span {{tip}}
</template>
<script>
export default {
  props:{
    tip:{
      type:String,
      default:'111'
    }
  }
};
</script>
<style lang="scss" scoped>
.poptip {
  position: absolute;
  width: 100%;
  height: 30px;
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  line-height: 30px;
  color: #777;
  .arrow {
    margin: 0 auto;
    top: -5px;
    left: 0;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 5px;
    position: absolute;
    // background: blue;
    &::after {
      display: block;
      position: absolute;
      border-color: transparent;
      border-style: solid;
      content: " ";
      top: 1px;
      top: -5px;
      border-top-width: 0;
      border-bottom-color: #fff;
      border-width: 5px;
    }
  }
}
</style>
