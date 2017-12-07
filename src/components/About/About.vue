<template lang="pug">
  div.about
    div.me
      div.bg-wall
      div.yue-ma
        div.head-pic
          img.pic(src="./../../assets/me960x960.jpg")
        div.wechat
          img(src="./../../assets/wechatcode.png")
        div.simple-desc
          p.name ZZHIREN
          p.p A Web Dev NewBie
          span.yueyue YUE MA 😘
    div.desc
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.about {
  width: 875px;
  // height: 400px;
  // background:red;
  display: flex;
  .me {
    width: 225px;
    height: 400px;
    display: flex;
    flex-direction: column;
    .bg-wall {
      height: 100px;
      background: black;
    }
    .yue-ma {
      z-index: 1;
      flex: 1;
      background: white;
      padding: 7px 7px 0 7px;
      box-sizing: border-box;
      position: relative;
      &:hover .wechat {
        opacity: 0.75;
      }
      .head-pic {
        width: 90px;
        height: 90px;
        border-radius: 96px;
        border: 3px solid rgba(255, 255, 255, 0.5);
        margin-top: - 55px;
        margin-left: 60px;
        z-index: 2;
        overflow: hidden;
        .pic {
          width: 100%;
        }
      }
      .wechat {
          transition: opacity 0.5s linear;
          width: 211px;
          opacity: 0;
          z-index: 3;
          padding: 20px 7px 0 7px;
          background: white;
          height: 100%;
          position: absolute;
          top: 0;
        img {
          width: 100%;
        }
      }
      .simple-desc {
        margin-top: 40px;
        width: 100%;
        text-align: center;
        .name {
          font-size: 20px;
          font-family: DINRegular, -apple-system, BlinkMacSystemFont,
            "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI",
            "Microsoft YaHei", "\\5FAE软雅黑", sans-serif;
          font-weight: bold;
        }
        .p {
          margin-top: 30px;
          font-size: 14px;
          color: gray;
          font-family: DINRegular, -apple-system, BlinkMacSystemFont,
            "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI",
            "Microsoft YaHei", "\\5FAE软雅黑", sans-serif;
        }
        .yueyue {
          border: 1px solid #0088f5;
          color: #0088f5;
          font-family: DINRegular, -apple-system, BlinkMacSystemFont,
            "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI",
            "Microsoft YaHei", "\\5FAE软雅黑", sans-serif;
          padding: 4px 4px;
          box-sizing: border-box;
          margin-top: 30px;
          display: inline-block;
          width: 100px;
          opacity: .8;
        }
      }
    }
  }
  .desc {
    flex: 1;
    margin-left: 14px;
    background: green;
  }
}
</style>
