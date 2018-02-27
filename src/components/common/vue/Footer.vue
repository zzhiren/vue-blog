<template lang="pug">
  div.footer
    span POWERED BY 
    a(target="_blank" href="https://cn.vuejs.org/v2/guide/") VUE
    span 、
    a(target="_blank" href="http://www.expressjs.com.cn/") EXPRESS 
    span ADN 
    a(target="_blank" href="https://www.mongodb.com/") MONGODB
    span . DEVELOPED BY ME
    //- span .   THE THEM DESIGNED BY 
    //- a(target="_blank" href="https://surmon.me/") SURMON
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import 'src/components/common/scss/base.scss';
.footer{
  height: 76px;
  width: 100%;
  background-color: $background-white;
  position: relative;
  margin-top: 14px;
  text-align: center;
  line-height: 80px;
  color: #555;
  opacity: .8;
  a{
    color: #555;
    &:hover{
      color: $font-color-blue;
    }
  }
}
</style>
