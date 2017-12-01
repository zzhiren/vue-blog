<template lang="pug">
  div.blog-detils
    h3.title 是否是两份简历及否是两份简历及
    p

</template>
<script>
import axios from 'axios';

export default {
  data(){
    return{
      data:''
    }
  },
  mounted(){
    this._initData()
  },
  methods:{
    _initData(){
      this.$axios({
        method: 'post',
        url: '/getblogdetils',
        data:{
          id: this.$route.params.id
        }
      }).then(res =>{
        this.data = res.body.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.blog-detils{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: white;
  width: 100%;
  height: 1000px;
  background-color: rgba(0,0,0,0.8);
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  .title{
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
  }
}
</style>
