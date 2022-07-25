<template>
  <vLoader v-if="services === null" />
  <div v-else class="water-management">
    <div class="container">
      <h1 v-if="services.title" class="title" v-html="services.title"></h1>
      <div v-if="services.content" class="description-wrapper">
        <p class="text" v-html="services.content"></p>
      </div>
      <div v-if="services.tegs" class="advantages-list">
        <div class="advantages-list__item" v-for="tegs in services.tegs" :key="tegs.id">{{ tegs.title }}</div>
      </div>
      <vCard v-if="services.cards" :cards="services.cards"/>
      <swiper
          v-if="services.images"
          :slidesPerView="(width > 1000) ? 4 : (width > 980) ? 3 : (width > 575) ? 2 : 1"
          :spaceBetween="30"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide v-for="images in services.images" :key="images">
          <img :src="images" :alt="images" class="image">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../style/swiper.css";

// import required modules
import {Navigation} from "swiper";

export default {
  name: "ServiceView",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      services: null,
      modules: [Navigation],
      width: 0
    }
  },
  created() {
    this.axios.get(`/api/service/${this.$route.params.id}`).then(res => {
      this.services = res.data
    })
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  margin-top: 40px;
  img {
    object-fit: cover;
    border-radius: 100%;
  }
}
</style>