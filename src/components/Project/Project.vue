<template lang="pug">
  div.project(ref="project")
    a.project-item(target="_blank" v-for="(item,index) in projects" v-bind:key="index" v-bind:href="item.projectUrl")
      p.item-icon
        img(v-if="item.projectIcon == 'Vue'" src="./../../assets/vue.svg" width="64")
        Icon.icon(v-if="item.projectIcon" v-bind:type="item.projectIcon")
      p.item-title(v-html="item.projectName")
      p.item-dsc {{item.projectDsc}}
      p.item-github
        span.meta
          Icon.star(type="android-star")  
          span.num {{item.star}}
        span.meta
          Icon.fork(type="fork-repo") 
          span.num {{item.fork}}
        span.meta
          Icon.issue(type="ios-information-outline") 
          span.num {{item.issue}}
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
      this.$refs.project.style.height = innerHeight - 76 - 63 - 14 - 16 + 'px';
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
      .icon{
        font-size: 69px;
      }
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
