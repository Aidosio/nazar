<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__top">
        <router-link class="footer__logo" to="/"><img :src="footer.logo" alt="logo"></router-link>
        <div class="footer__links">
          <router-link class="footer__link" to="/">{{ footer.about }}</router-link>
          <router-link class="footer__link" to="/achievements">{{ footer.achievement }}</router-link>
          <router-link class="footer__link" to="/contact">{{ footer.contact }}</router-link>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__rights">© 2022 Все права защищены
        </div>
        <a class="footer__developed" href="https://www.a-lux.kz/" target="_blank">
          Разработано в <img src="../assets/ALUX.png" alt="alux">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "vFooter",
  props: {
    footer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .footer__developed {
    display: flex;
  }
  .footer__developed img {
    width: 80px;
    margin-left: 10px;
  }
</style>