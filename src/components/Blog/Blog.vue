<template lang="pug">
  div.blog
    div.content
      transition(name="fade" appear mode="out-in")
        keep-alive(include ="BlogList" exclude="BlogListByTag,BlogDetails")
          router-view 
    div.right-side
      div.right-content
        keep-alive
          npm
        div.tags(ref="tag" v-bind:class="{tagsfixed: fixedState}")
          ul.items
            li.item(v-for="(item,index) in tags" @click="_toBlogListByTag(item.name)") 
              Icon.icon(v-if="item.icon != ''" v-bind:type="item.icon")
              //- img.vue(v-if="item.svg != ''" src="./../../assets/vue.svg" width="13")
              span(v-if="item.name !='vue'") {{item.aliasName}}
              span.vue(v-if="item.name == 'vue'")
              span(v-if="item.name == 'vue'") {{item.aliasName}}
</template>
<script>
import axios from "axios";
import npm from "./Npm.vue"
export default {
  name: "Blog",
  data() {
    return {
      animationClass: "",
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      state: 0,
      fixedState: false,
      tags: []
    };
  },
  components:{
    npm
  },

  mounted() {
    this._initNpmData();
    this._initTagData();
    this._addEventListener();
  },
  methods: {
    _addEventListener() {
      document.addEventListener("scroll", this._setTagPosition);
    },
    _setTagPosition() {
      let h = document.documentElement.scrollTop;
      if (h >= 407) {
        this.fixedState = true;
      } else {
        this.fixedState = false;
      }
    },
    _initTagData(){
      this.$axios({
        method:'get',
        url:'/gettag',
        params:{
          name: 'all'
        }
      }).then(res=>{
        this.tags = res.data.data
      })
    },
    _initNpmData() {
      this.$axios({
        method: "get",
        url: "/searchnpm",
        params: {
          text: "vue",
          from: this.from
        }
      }).then(res => {
        this.npmList = res.data.objects;
        this.state = 1;
      });
    },
    _searchNPM() {
      if (this.text == "") {
        this.$axios({
          method: "get",
          url: "/searchnpm",
          params: {
            text: "vue",
            from: this.from
          }
        }).then(res => {
          this.npmList = res.data.objects;
        });
      } else {
        this.$axios({
          method: "get",
          url: "/searchnpm",
          params: {
            text: this.text,
            from: this.from
          }
        }).then(res => {
          this.npmList = res.data.objects;
        });
      }
    },
    _toBlogListByTag(name) {
      let tagName = name;
      this.$router.push({
        name: "Tag",
        params: { tagName }
      });
    },
  }
};
</script>
<style lang="scss" scoped>
@import "src/components/common/scss/base.scss";
$margin-top: 79px;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.blog {
  display: flex;
  .content {
    flex: 1;
  }
  .right-content {
    // position: fixed;
  }
  .right-side {
    margin-left: 14px;
    width: 266px;
    .tagsfixed {
      position: fixed !important;
      margin-top: -390px !important;
    }
    .tags {
      // position: fixed;
      background-color: $background-white;
      width: 266px;
      height: 358.6px;
      margin-top: 14px;
      padding: 10.66px;
      .items {
        width: 226px;
        .item {
          color: #555;
          height: 28px;
          background-color: hsla(0, 0%, 77%, 0.4);
          float: left;
          padding-left: 8px;
          padding-right: 8px;
          margin-right: 10.66px;
          margin-bottom: 10.66px;
          font-size: 14px;
          line-height: 28px;
          transition: background-color 0.5s linear;
          &:hover {
            background-color: hsla(0, 0%, 77%, 1);
            cursor: pointer;
          }
          .icon {
            margin-right: 5px;
          }
          .vue {
            margin-right: 5px;
            &::before {
              content: url(../../assets/tagvue.svg);
              display: inline-block;
              vertical-align: middle;
              margin-top: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
