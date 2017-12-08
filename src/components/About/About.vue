<template lang="pug">
  div
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
        p
          Icon.icon.blue(type="android-person")
          span.icon-span.opacity I'am Zzhiren, a Web Deb NewBie!
        p
          Icon.icon.red(type="music-note")
          span.icon-span.opacity Jay, Pop Music
        p
          Icon.icon.pink(type="heart")
          span.icon-span.opacity Code, Game, Movie
        p
          Icon.icon.green(type="coffee")
          span.icon-span
            a(title="GitHub" href="https://github.com/Zzhiren" target="_blank")
              Icon.icon.black(type="social-github")
          span.icon-span 
            a(title="新浪微博" href="https://weibo.com/u/5657883808?refer_flag=1001030101_&is_all=1" target="_blank")
              img(src="./../../assets/weibo.svg" width="18")
          span.icon-span.margin-left
            a(title="知乎" href="https://www.zhihu.com/people/zhi-ren-16-93/activities" target="_blank")
              img(src="./../../assets/zhihu.svg" width="15")
          span.icon-span.margin-left
            a(title="Stackoverflow" href="https://stackoverflow.com/users/9071323/z-zzhiren?tab=profile" target="_blank")
              img(src="./../../assets/stack-overflow.svg" width="18")
          span.icon-span.margin-left
            a(title="掘金" href="https://juejin.im/user/59049e4fac502e0063e477a5" target="_blank")
              img(src="./../../assets/juejin.svg" width="18")
          span.icon-span.margin-left
            a(title="简书" href="http://www.jianshu.com/users/9e34c7d8ff19/timeline" target="_blank")
              img(src="./../../assets/jianshu.svg" width="18")
          span.icon-span.margin-left
            a(title="邮箱" href="mailto:506151409@qq.com")
              img(src="./../../assets/email.svg" width="18")
        p
          Icon.icon.white(type="code")
          span.icon-span To improve is to change; to be perfect is to change often！
        p
          span.pubg Steam: Zzhiren / PUBG: Zzhiren
              
        p
          span.lol 
            span.small 大区:战争学院/均衡教派  
            span ID:
            span.small 杀戮纸人
    div.location
      div#bmap
</template>
<script>
export default {
  data() {
    return {
      location: "杭州"
    };
  },
  mounted() {
    this._initBMap();
  },
  methods: {
    _initBMap() {
      // var map = new BMap.Map("bmap");
      // // var point = new BMap.Point(116.404, 39.915); // 创建点坐标
      // // map.centerAndZoom(point, 15);
      // var myGeo = new BMap.Geocoder();
      // // 将地址解析结果显示在地图上，并调整地图视野
      // myGeo.getPoint('杭州', point => {
      //   if (point) {
      //     map.centerAndZoom(point, 5);
      //     map.addOverlay(new BMap.Marker(point));
      //   }
      // });

      var map = new AMap.Map("bmap", {
        resizeEnable: true,
        zoom: 6,
        // center: '杭州',
        cityName: '杭州',
        mapStyle:'amap://styles/c1cd5869dbce66ec0246989c849c6686'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/components/common/scss/base.scss";

.about {
  width: 875px;
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
      background: rgba(0, 0, 0, 0.85);
      // padding: 7px 7px 0 7px;
      box-sizing: border-box;
      position: relative;
      // transition: background 0.5s linear;
      &:hover .wechat {
        opacity: 0.85;
      }

      .head-pic {
        width: 90px;
        height: 90px;
        border-radius: 96px;
        border: 3px solid rgba(0, 0, 0, 0.5);
        margin-top: - 55px;
        margin-left: 68px;
        z-index: 2;
        overflow: hidden;
        .pic {
          width: 100%;
        }
      }
      .wechat {
        transition: opacity 0.5s linear;
        width: 100%;
        opacity: 0;
        z-index: 3;
        padding: 20px 7px 0 7px;
        box-sizing: border-box;
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
          font-family: "Graduate", cursive;
          font-weight: bold;
          color: white;
        }
        .p {
          margin-top: 30px;
          font-size: 14px;
          color: white;
          font-family: "Aldrich", sans-serif;
        }
        .yueyue {
          border: 1px solid #0088f5;
          color: #0088f5;
          font-family: "Aldrich", sans-serif;
          padding: 4px 4px;
          box-sizing: border-box;
          margin-top: 35px;
          display: inline-block;
          width: 100px;
          opacity: 0.8;
        }
      }
    }
  }
  .desc {
    flex: 1;
    margin-left: 14px;
    background: rgba(0, 0, 0, 0.7);
    // background: rgba(255, 255, 255, 0.9);
    padding: 28px 42px;
    box-sizing: border-box;
    height: 400px;
    p {
      margin-bottom: 30px;
      .icon {
        font-size: 18px;
        // color: white;
        margin-right: 25px;
        opacity: 0.8;
      }
      .icon-span {
        font-size: 14px;
        color: white;
        opacity: 1;
        letter-spacing: 1px;
        margin-right: -10px;
        font-family: "Aldrich", sans-serif;
      }
      .pubg {
        font-size: 14px;
        color: white;
        letter-spacing: 1px;
        margin-right: -10px;
        opacity: 0.8;
        font-family: "Aldrich", sans-serif;
        &::before {
          content: url(../../assets/pubg.svg);
          vertical-align: middle;
          display: inline-block;
          // margin-top: 2px;
          line-height: 10px;
          margin-right: 25px;
        }
      }
      .lol {
        opacity: 0.8;
        font-size: 14px;
        color: white;
        letter-spacing: 1px;
        margin-right: -10px;
        font-family: "Aldrich", sans-serif;
        &::before {
          content: url(../../assets/lol.svg);
          vertical-align: middle;
          display: inline-block;
          // margin-top: 2px;
          line-height: 10px;
          margin-right: 25px;
        }
        .small {
          font-size: 12px;
          font-family: DINRegular, -apple-system, BlinkMacSystemFont,
            PingFang SC, Helvetica Neue, Hiragino Sans GB, Segoe UI,
            Microsoft YaHei, \\5fae\8f6f\96c5\9ed1, sans-serif;
        }
      }
      .margin-left {
        margin-left: 25px;
      }
    }
  }
}
.location {
  width: 100%;
  height: 250px;
  background: rgba(0, 0, 0, 0.85);
  margin-top: 14px;
  padding: 7px;
  box-sizing: border-box;
  #bmap {
    width: 100%;
    height: 100%;
  }
}
</style>
