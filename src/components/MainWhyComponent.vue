<template>
  <div class="main-why">
    <div class="main-why__innter container">
      <h2 class="title">{{ text }}</h2>
      <div class="main-why__items">
        <div class="main-why__item" v-for="why in whys" :key="why.id">
          <div class="main-why__icon"><img :src="why.logo" alt="icon">
          </div>
          <div class="main-why__descr">{{ why.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWhyComponent",
  props: {
    whys: Array,
    text: String
  }
}
</script>

<style scoped>

</style>