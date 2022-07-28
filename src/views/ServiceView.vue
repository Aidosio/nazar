<template>
  <vLoader v-if="services === null" />
  <div v-else class="services-block">
    <div v-if="width > 768">
      <img class="image_service" v-for="service in services.background" :key="service" :src="service.download_link" alt="">
    </div>
    <div v-else>
      <img class="image_service" v-for="service in services.mobilebackground" :key="service" :src="service.download_link" alt="">
    </div>
    <div class="container">
      <h1 v-if="services.title" class="title" v-html="services.title"></h1>
      <div v-if="services.content" class="description-wrapper">
        <p class="text" v-html="services.content"></p>
      </div>
      <div v-if="services.tegs.length" class="advantages-list">
        <div class="advantages-list__item" v-for="tegs in services.tegs" :key="tegs.id">{{ tegs.title }}</div>
      </div>
      <vCard v-if="services.cards.length" :cards="services.cards"/>
      <v-slider v-if="services.images.length" :images="services.images" :width="width"/>
    </div>
  </div>
</template>

<script>

import VSlider from "@/ui/vSlider";

export default {
  name: "ServiceView",
  components: {
    VSlider,
  },
  data() {
    return {
      services: null,
      width: 0
    }
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.axios.get(`/api/service/${this.$route.params.id}`).then(res => {
          this.services = res.data
        })
      },
    },
  },
  created() {
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

.solutions__slider-wrapper {
  z-index: 1;
}

.image_service {
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: contain;
  position: absolute;
}
//
//.image_service:first-child {
//  top: 150px;
//  right: 0;
//}
//
//.image_service:last-child {
//  width: 30%;
//  left: 0;
//  top: 350px;
//}


.services-block {
 padding-top: 180px;
 margin-bottom: 140px;
}
</style>