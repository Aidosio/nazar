<template>
  <swiper
      :slidesPerView="(width > 1000) ? 5 : (width > 980) ? 3 : (width > 575) ? 2 : 1"
      :spaceBetween="30"
      :loop="true"
      :modules="modules"
      :navigation="true"
      class="mySwiper"
  >
    <swiper-slide v-for="image in images" :key="image">
      <img :src="image" :alt="image" class="image">
    </swiper-slide>

  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/swiper.css";
import {Navigation} from "swiper";

export default {
  name: "vSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>