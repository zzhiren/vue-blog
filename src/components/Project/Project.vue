<template lang="pug">
  div.project
    a.project-item
      p.item-icon
        img(src="./../../assets/vue.svg" width="64")
      p.item-title vue-blog
      p.item-dsc  😜My blog font end by @vue!
      p.item-github
        span.meta
          Icon.star(type="android-star")  
          span.num 11
        span.meta
          Icon.fork(type="fork-repo") 
          span.num 11
        span.meta
          Icon.issue(type="ios-information-outline") 
          span.num 11
    div.project-item  1212
    div.project-item  1212
    div.project-item  1212
    div.project-item  1212
</template>
<script>
export default {
  data() {
    return {
      projects:[]
    };
  },
  mounted() {
    this._initData()
  },
  methods: {
    _initData() {
      let date = new Date();
      let timer = date.getTime().toString();
      this.$axios({
        method: "get",
        url: "/getgithubproject?t="+timer
      }).then(res=>{
        this.projects = res.data.data
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/components/common/scss/base.scss";

.project {
  width: 872px;
  display: flex;
  flex-wrap: wrap;

  .project-item {
    width: 209px;
    padding: 12px;
    background-color: $background-white;
    margin-right: 12px;
    margin-bottom: 12px;
    height: 274px;
    transition: background-color 0.5s linear;
    color: #555;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      // background: rgba(0, 0, 0, 0.9);
      cursor: pointer;
      color: #222 !important;
    }
    &:nth-child(4n) {
      margin-right: 0;
    }
    .item-icon {
      text-align: center;
      margin-top: 18px;
      margin-bottom: 18px;
    }
    .item-title {
      font-family: "Asap";
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 25px;
    }
    .item-dsc {
      color: inherit;
      text-indent: 20px;
      font-size: 14px;
      height: 56px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    }
    .item-github {
      text-align: center;
      display: flex;
      margin-top: 12px;
      font-size: 14px;
      .meta {
        flex: 1;
        // font-size: 12px;
        .star {
          font-size: 17px;
          margin-right: 2px;
        }
        .fork {
          font-size: 15px;
          margin-right: 2px;
        }
        .issue {
          font-size: 16px;
          margin-right: 2px;
        }
        .num {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
