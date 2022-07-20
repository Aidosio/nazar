<template>
  <div class="main-goal">
    <div class="main-goal__inner container">
      <h2 class="title">{{ text }}</h2>
      <div class="main-goal__items">
        <div class="main-goal__item">
          <div class="main-goal__descr mr40 text" v-html="mission.header_content">

          </div><img class="main-goal__img" :src="mission.header_image" alt="image" title="">
        </div>
        <div class="main-goal__item second-item"><img class="main-goal__img mr40" :src="mission.footer_image" alt="image" title="">
          <div class="main-goal__descr mission-descr text" v-html="spliceComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainGoalComponent",
  props: {
    mission: Object,
    text: String
  },
  computed: {
    spliceComponent() {
      const text = this.mission.footer_text1 + this.mission.footer_text2 + this.mission.footer_text3 + this.mission.footer_text4
      return text
    }
  }
}
</script>

<style scoped>

</style>