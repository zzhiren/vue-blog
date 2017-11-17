<template lang="pug">
  div.topheader
    div.content
        span.my-name </> ZZHIREN
        span.motto my name is zzhiren
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import 'src/components/common/scss/base.scss';
$height: 63px;
.topheader{
    width: 100%;
    position: fixed;
    height: $height;
    background-color: rgba(0,0,0,0.8);
    z-index: 999;
    .content{
        width: $width;
        height: $height;
        margin: $margin-auto;
        .my-name{
            line-height: $height;
            font-size: 22px;
            color: white;
        }
        .motto{
            color: gray;
            font-size: 16px;
            margin-left: 40px;
        }
    }
}
</style>
