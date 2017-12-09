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
          span.icon-span.opacity I'am Zzhiren, a Web Dev NewBie!
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
              Icon.icon.white(type="social-github")
          span.icon-span 
            a(title="FreeCodeCamp" href="https://www.freecodecamp.cn/zzhiren" target="_blank")
              img(src="./../../assets/free-code-camp.svg" width="18")
          span.icon-span.margin-left
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
            span#lol.small 大区:战争学院/均衡教派  
            span id:
            span#lol.small 杀戮纸人
    div.location
      div#amap
</template>
<script>
export default {
  data() {
    return {
      address: "杭州"
    };
  },
  mounted() {
    this._initBMap();
  },
  methods: {
    _initBMap() {
      var map = new AMap.Map("amap", {
        resizeEnable: true,
        zoom: 7,
        viewMode:'3D',
        pitch:50,
        mapStyle: "amap://styles/01d45b40400bd8d7c856228b979675c7"
      });
      AMap.plugin("AMap.Geocoder", () => {
        var geocoder = new AMap.Geocoder({
          city: "010" //城市，默认：“全国”
        });
        var marker = new AMap.Marker({
          map: map,
          bubble: true,
          animation: "AMAP_ANIMATION_BOUNCE",
        });
        geocoder.getLocation(this.address, function(status, result) {
          if (status == "complete" && result.geocodes.length) {
            marker.setPosition(result.geocodes[0].location);
            map.setCenter(marker.getPosition());
            // document.getElementById("message").innerHTML = "";
          } else {
            // document.getElementById("message").innerHTML = "获取位置失败";
          }
        });
      });
      // marker = new AMap.Marker({
      //   // position: [116.39,39.9],
      //   // cityName: ['杭州','宣城'],
      //   animation: "AMAP_ANIMATION_BOUNCE",
      //   // title: provinces[i].name,
      //   map: map
      // });
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
          font-family: "Kite One", sans-serif;
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
    background: rgba(0, 0, 0, .9);
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
        font-family: "Kite One", sans-serif;
      }
      .pubg {
        font-size: 14px;
        color: white;
        letter-spacing: 1px;
        // margin-right: -8px;
        opacity: 0.8;
        font-family: "Kite One", sans-serif;
        &::before {
          content: url(../../assets/pubg.svg);
          vertical-align: middle;
          display: inline-block;
          // margin-top: 2px;
          line-height: 10px;
          margin-right: 23px;
        }
      }
      .lol {
        opacity: 0.8;
        font-size: 14px;
        color: white;
        letter-spacing: 1px;
        // margin-right: -8px;
        font-family: "Kite One",'QXyingbikai', sans-serif;
        &::before {
          content: url(../../assets/lol.svg);
          vertical-align: middle;
          display: inline-block;
          // margin-top: 2px;
          line-height: 10px;
          margin-right: 23px;
        }
        .small {
          font-size: 15px;
          // font-family: 'QXyingbikai',sans-serif;
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
  background: rgba(0, 0, 0, .9);
  margin-top: 14px;
  padding: 7px;
  box-sizing: border-box;
  #amap {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9)!important;
  }
}
</style>
