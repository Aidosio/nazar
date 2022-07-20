<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "vContainer"
}
</script>

<style scoped>
.container {
  max-width: 980px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
}
</style>