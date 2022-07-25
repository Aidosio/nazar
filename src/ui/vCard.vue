<template>
  <swiper
      v-if="width < 768"
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="false"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="images in cards" :key="images">
      <div class="solutions__item-mob">
        <div class="solutions__icon-mob"><img :src="images.logo" alt="icon">
        </div>
        <h3 class="solutions__subtitle-mob">
          {{ images.title }}
        </h3>
        <p class="solutions__descr-mob">
          {{ images.content }}
        </p>
        <img :src="images.background" alt="image" class="background-mob">
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
            {{ card.title }}
          </h3>
          <p class="solutions__descr">
            {{ card.content }}
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

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.solutions__item-mob {
  position: relative;
  width: 100%;
  max-height: 100%;
  min-height: 320px;
  color: #fff;
  background-color: rgba(39, 45, 48, 0.6);
  background-size: cover;
  background-position: center center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 90px;
  padding-bottom: 30px;
  margin: 60px 0px 0px;
}

.solutions__subtitle-mob {
  font-weight: 600;
}

.solutions__descr-mob {
  margin-top: calc(15px + 5 * ((100vw - 360px) / 620));
}

.background-mob {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
}

.solutions__icon-mob {
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: calc(70px + 50 * ((100vw - 360px) / 620));
  height: calc(70px + 50 * ((100vw - 360px) / 620));
  background: linear-gradient(226.63deg, #DAE3E5 17.03%, #F2F2F3 84.82%);
  box-shadow: 0px 11.6667px 35px #9e9e9e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  img {
    width: 40%;
    height: 40%;
  }
}
</style>