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
      <div class="slider-bottom swiper swiper-initialized swiper-horizontal swiper-pointer-events">
        <div class="swiper-wrapper" id="swiper-wrapper-757c28595fa07090" aria-live="polite"
             style="transform: translate3d(-1662.5px, 0px, 0px); transition-duration: 0ms;">
          <div v-for="(images, index) in services.images" :key="images.id"
              class="slider-bottom__slide swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group"
               aria-label="1 / 4" style="width: 207.5px; margin-right: 30px;">
            <img :src="images[index]" alt="slide image">
          </div>
        </div>
        <div class="slider-bottom__nav">
          <button class="slider-bottom__prev" tabindex="0" aria-label="Previous slide"
                  aria-controls="swiper-wrapper-757c28595fa07090">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#F2F6F8"></circle>
              <path d="M21.3433 14L15.6864 19.6569L21.3433 25.3137" stroke="#C01A6C" stroke-width="2"
                    stroke-linecap="round"></path>
            </svg>
          </button>
          <button class="slider-bottom__next" tabindex="0" aria-label="Next slide"
                  aria-controls="swiper-wrapper-757c28595fa07090">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="#F2F6F8"></circle>
              <path d="M18.6567 14L24.3136 19.6569L18.6567 25.3137" stroke="#C01A6C" stroke-width="2"
                    stroke-linecap="round"></path>
            </svg>
          </button>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaterManagementView",
  data() {
    return {
      services: {}
    }
  },
  created() {
    this.axios.get('/api/service/1').then(res => {
      this.services = res.data
    })
  }
}
</script>

<style scoped>

</style>