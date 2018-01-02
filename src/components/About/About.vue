<template lang="pug">
  div
    div.about
      div.me
        div.bg-wall
          div.bg
            img.bg-a(src="../../assets/bg-a.jpg")
          div.bg
            img.bg-b(src="../../assets/bg-b.jpg")
          div.sun
            img(src="../../assets/sun.png")
        div.yue-ma
          div.head-pic
            img.pic(src="./../../assets/me960x960.jpg")
          img.wechat(src="./../../assets/wechatcode.png")
          div.simple-desc
            p.name ZZHIREN
            p.p A Web Dev NewBie
            span.yueyue YUE MA 😘
      div.desc
        p
          Icon.icon.blue(type="android-person")
          span.icon-span I'am Zzhiren, a Web Dev NewBie!
        p
          Icon.icon.red(type="music-note")
          span.icon-span Jay, Pop Music
        p
          Icon.icon.pink(type="heart")
          span.icon-span Code, Game, Movie
        p
          Icon.icon.green(type="coffee")
          span.icon-span
            a(title="GitHub" href="https://github.com/Zzhiren" target="_blank")
              Icon.icon.black(type="social-github")
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
          Icon.icon.black(type="code")
          span.icon-span To improve is to change; to be perfect is to change often！
        p
          span.birthday Birthday: 
            span.number 1993/07/13(农历)
            span#font.shengxiao 生肖:
            span#font.xingzuo 星座:
        p
          span.food
            span.chicken Chicken
            span.fish , Fish
    div.location
      div#amap
    div.projects
      div.content
        p.title GET MORE PROJECT
        p.know-more 了解更多关于我的项目
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
        viewMode: "3D",
        pitch: 50,
        mapStyle: "amap://styles/c5af7e2e0f47bc64d417ba428b59dfb6"
      });
      AMap.plugin("AMap.Geocoder", () => {
        var geocoder = new AMap.Geocoder({
          city: "010" //城市，默认：“全国”
        });
        var marker = new AMap.Marker({
          map: map,
          bubble: true,
          animation: "AMAP_ANIMATION_BOUNCE"
        });
        geocoder.getLocation(this.address, function(status, result) {
          if (status == "complete" && result.geocodes.length) {
            marker.setPosition(result.geocodes[0].location);
            map.setCenter(marker.getPosition());
          } else {
          }
        });
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
      height: 105px;
      // background: black;
      position: relative;
      overflow: hidden;
      .sun {
        position: absolute;
        top: 0;
        right: 12px;
        width: 60px;
        height: 66.9px;
        animation: sun 3s linear infinite;
        animation-direction: alternate;
        img {
          width: 60px;
          height: 66.9px;
        }
        @keyframes sun {
          from {
            opacity: 1;
          }
          to {
            opacity: 0.3;
          }
        }
      }
      .bg {
        width: 225px;
        height: 105px;
        overflow: hidden;
        position: absolute;
        .bg-a {
          width: 315px;
          height: 210px;
          opacity: 1;
          animation-name: bg-a;
          animation-duration: 20s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-fill-mode: initial;
        }
        .bg-b {
          width: 630px;
          height: 210px;
          opacity: 0.5;
          animation-name: bg-b;
          animation-duration: 30s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-fill-mode: initial;
        }

        @keyframes bg-a {
          0% {
            margin-top: 0;
            margin-left: 0;
          }
          15% {
            margin-top: 0;
            margin-left: -30px;
          }
          35% {
            margin-top: 0;
            margin-left: -60px;
          }
          51% {
            margin-top: -18px;
            margin-left: -90px;
          }
          67% {
            margin-top: -36px;
            margin-left: -60px;
          }
          85% {
            margin-top: -72px;
            margin-left: -30px;
          }
          100% {
            margin-top: -105px;
            margin-left: 0;
          }
        }
        @keyframes bg-b {
          0% {
            margin-top: 0;
            margin-left: 0;
          }
          25% {
            margin-top: -105px;
            margin-left: -202.5px;
          }
          50% {
            margin-top: 0;
            margin-left: -202.5px;
          }
          75% {
            margin-top: -105px;
            margin-left: -303.75px;
          }
          100% {
            margin-top: -105px;
            margin-left: -405px;
          }
        }
      }
    }
    .yue-ma {
      z-index: 1;
      flex: 1;
      background: $background-white;
      box-sizing: border-box;
      position: relative;
      transition: background 0.5s linear;
      z-index: 555;
      &:hover .wechat {
        opacity: 0.7;
      }
      &:hover .simple-desc {
        opacity: 0.2;
      }

      .head-pic {
        width: 90px;
        height: 90px;
        border-radius: 96px;
        border: 3px solid rgba(255, 255, 255, 0.5);
        margin-top: - 50px;
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
        z-index: 3;
        box-sizing: border-box;
        background: $background-white;
        height: 100%;
        position: absolute;
        top: 0;
        opacity: 0;
      }
      .simple-desc {
        margin-top: 40px;
        width: 100%;
        text-align: center;
        .name {
          font-size: 20px;
          font-family: "Graduate", cursive;
          font-weight: bold;
          color: black;
        }
        .p {
          margin-top: 30px;
          font-size: 14px;
          color: black;
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
          opacity: 0.9;
        }
      }
    }
  }
  .desc {
    flex: 1;
    margin-left: 14px;
    background: $background-white;
    padding: 28px 42px;
    box-sizing: border-box;
    height: 400px;
    p {
      margin-bottom: 30px;
      .icon {
        font-size: 18px;
        margin-right: 25px;
      }
      .icon-span {
        font-size: 14px;
        color: black;
        letter-spacing: 1px;
        margin-right: -10px;
        font-family: "Kite One", sans-serif;
      }
      .food{
        font-size: 14px;
        color: black;
        letter-spacing: 1px;
        font-family: "Kite One", sans-serif;
        &::before {
          content: url(../../assets/food.svg);
          vertical-align: middle;
          display: inline-block;
          margin-top: -10px;
          line-height: 10px;
          margin-right: 24px;
          margin-left: -1px;
        }
        .chicken {
          // margin-right: 14px;
          &::after {
            content: url(../../assets/chicken.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: -5px;
            line-height: 10px;
            margin-left: 2px;
          }
        }
        .fish {
          // margin-right: 14px;
          &::after {
            content: url(../../assets/fish.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: -5px;
            line-height: 10px;
            margin-left: 2px;
          }
        }
      }
      .birthday {
        font-size: 14px;
        color: black;
        letter-spacing: 1px;
        font-family: "Kite One", sans-serif;
        .number {
          font-size: 12px;
        }
        &::before {
          content: url(../../assets/birthday.svg);
          vertical-align: middle;
          display: inline-block;
          margin-top: -8px;
          line-height: 10px;
          margin-right: 24px;
          margin-left: -1px;
        }
        .shengxiao {
          margin-left: 10px;
          margin-right: 10px;
          &::after {
            content: url(../../assets/xiaohuangji.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: -6px;
            line-height: 10px;
            margin-left: 1px;
          }&::after {
            content: url(../../assets/xiaohuangji.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: -6px;
            line-height: 10px;
            margin-left: 1px;
          }
        }
        .xingzuo {
          &::after {
            content: url(../../assets/xingzuo.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: 1px;
            line-height: 10px;
            margin-left: 1px;
          }
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
  background: $background-white;
  margin-top: 14px;
  padding: 7px;
  box-sizing: border-box;
  #amap {
    width: 100%;
    height: 100%;
    background: $background-white !important;
  }
}
.projects {
  width: 100%;
  height: 225px;
  background: $background-white;
  margin-top: 14px;
  padding: 7px;
  box-sizing: border-box;
  text-align: center;
  .content {
    width: 100%;
    height: 100%;
    padding-top: 55px;
    box-sizing: border-box;
    transition: background 0.25s linear;
    &:hover {
      background: rgba(200, 200, 200, 0.3);
    }
    &:hover .title {
      opacity: 1;
    }
    &:hover .know-more {
      opacity: 1;
    }
    .title {
      font-family: "Asap", sans-serif;
      font-size: 42px;
      color: black;
      opacity: 0.4;
      transition: opacity 0.25s linear;
    }
    .know-more {
      margin-top: 18px;
      font-size: 15px;
      letter-spacing: 1px;
      color: black;
      opacity: 0.4;
      transition: opacity 0.25s linear;
    }
  }
}
</style>
