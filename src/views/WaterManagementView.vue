<template>
  <div class="water-management">
    <div class="container">
      <h1 class="title" v-html="services.title"></h1>
      <div class="description-wrapper">
        <p class="text" v-html="services.content"></p>
      </div>
      <div class="advantages-list">
        <div class="advantages-list__item" v-for="tegs in services.tegs" :key="tegs.id">{{ tegs.title }}</div>
      </div>
      <swiper
          :slidesPerView="4"  
          :spaceBetween="30"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide v-for="images in services.images" :key="images">
          <img :src="images" :alt="images">
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
  name: "WaterManagementView",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      services: {},
      modules: [Navigation],
    }
  },
  created() {
    this.axios.get('/api/service/1').then(res => {
      this.services = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
  }
}
</style>