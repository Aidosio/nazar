<template>
  <div class="achievements">
    <div class="container">
      <h1 class="title">ДОСТИЖЕНИЯ</h1>
      <div class="achievements__items">
        <div class="achievements__item" v-for="achievement in achievements.achievement" :key="achievement.id">
          <div class="achievements__icon"><img :src="achievement.logo" alt="icon">
          </div>
          <p>{{ achievement.content }}</p>
        </div>
      </div>
      <div class="licence">
        <h2 class="title">ЛИЦЕНЗИИ</h2>
        <div class="licence__items" id="lightgallery">
          <a class="licence__item" :href="licences.licence" v-for="licences in achievements.licences" :key="licences.id">
            <img :src="licences.licence" alt="image">
          </a>
        </div>
      </div>
      <div class="certificate">
        <h2 class="title">СЕРТИФИКАТЫ</h2>
        <div class="certificate__items" id="lightgallery2">
          <a class="certificate__item" :href="certificate.certificate" v-for="certificate in achievements.certificate" :key="certificate.id">
            <img :src="certificate.certificate" alt="image">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AchievementsView",
  data() {
    return {
      achievements : {}
    }
  },
  created() {
    this.axios.get('api/achievements').then(res => {
      this.achievements = res.data
    })
  }
}
</script>

<style scoped>

</style>