<template>
  <swiper
      v-if="width < 768"
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="images in cards" :key="images">
      <div class="solutions__item">
        <div class="solutions__icon"><img :src="images.logo" alt="icon">
        </div>
        <h3 class="solutions__subtitle">
          {{images.title}}
        </h3>
        <p class="solutions__descr">
          {{images.content}}
        </p>
        <img :src="images.background" alt="image" class="background">
      </div>
    </swiper-slide>
  </swiper>
  <div class="solutions__slider-wrapper" v-else>
    <div class="solutions__items" v-for="card in cards" :key="card.id">
      <div class="wrapper">
        <div class="solutions__item">
          <div class="solutions__icon"><img :src="card.logo" alt="icon">
          </div>
          <h3 class="solutions__subtitle">
            <br>
            {{card.title}}
          </h3>
          <p class="solutions__descr">
            {{card.content}}
          </p>
          <img :src="card.background" alt="image" class="background">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../style/card.css";

// import required modules
import {Navigation, Autoplay} from "swiper";

export default {
  name: "WaterManagementView",
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Autoplay],
      width: 0
    }
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>