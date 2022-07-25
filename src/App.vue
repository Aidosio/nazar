<template>
  <vMenu :menu="content" />
  <router-view />
  <vFooter :footer="content" />
</template>

<script>
export default {
  data() {
    return {
      content: {}
    }
  },
  created() {
    this.axios.get('/api/title').then(res => {
      this.content = res.data
    })
  }
}
</script>

<style lang="scss">
@import "style/nullable.css";
@import "style/style.css";
</style>
