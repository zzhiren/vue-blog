<template lang="pug">
  div.project
    div.project-item  1212
    div.project-item  1212
    div.project-item  1212
    div.project-item  1212
    div.project-item  1212
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.project {
  width: 100%;
  // height: 100px;
  display: flex;
  flex-wrap: wrap;

  .project-item {
    width: 209.13px;
    background: red;
    margin-right: 8.1px;
    margin-bottom: 8.1px;
    height: 274px;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}
</style>
