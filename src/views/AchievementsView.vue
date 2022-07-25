<template>
  <vLoader v-if="achievements === null" />
  <div v-else class="achievements">
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
        <photo-provider class="licence__items">
          <photo-consumer class="licence__item" v-for="src in achievements.licences" :intro="src.licence" :key="src.id" :src="src.licence">
            <img :src="src.licence" class="view-box">
          </photo-consumer>
        </photo-provider>
      </div>
      <div class="certificate">
        <h2 class="title">СЕРТИФИКАТЫ</h2>
        <photo-provider class="licence__items">
          <photo-consumer class="licence__item" v-for="src in imgList" :intro="src.certificate" :key="src.id" :src="src.certificate">
            <img :src="src.certificate" class="view-box">
          </photo-consumer>
        </photo-provider>
      </div>
    </div>
  </div>
</template>

<script>
import {PhotoConsumer, PhotoProvider} from "vue3-photo-preview";
export default {
  name: "AchievementsView",
  components: {
    PhotoProvider,
    PhotoConsumer,
  },
  data() {
    return {
      achievements : null,
      imgList: []
    }
  },
  created() {
    this.axios.get('api/achievements').then(res => {
      this.achievements = res.data
      this.imgList = res.data.certificate
    })
  }
}
</script>

<style scoped>

</style>