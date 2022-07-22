<template>
  <div class="alert alert-success" role="alert">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "vAlert",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.alert-success {
  position: fixed;
  top: 20px;
  z-index: 10;
  right: 20px;
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
  padding: 0.75rem 1.25rem;
  width: 400px;
}
</style>