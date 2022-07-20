<template>
  <div class="main-about">
    <div class="main-about__inner container">
      <h2 class="title">{{ text }}</h2>
      <div class="main-about__items">
        <div v-for="abouts in about" :key="abouts.id" class="main-about__item">
          <div class="main-about__number">{{ abouts.title }}
          </div>
          <div class="main-about__descr">
            {{ abouts.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainAboutComponent",
  props: {
    about: Array,
    text: String
  }
}
</script>

<style scoped>

</style>