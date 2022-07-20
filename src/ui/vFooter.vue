<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__top"><router-link class="footer__logo" to="/"><img :src="footer.logo" alt="logo"></router-link>
        <div class="footer__links">
          <router-link class="footer__link" to="/">{{ footer.about }}</router-link>
          <router-link class="footer__link" to="/achievements">{{ footer.achievement }}</router-link>
          <router-link class="footer__link" to="/contact">{{ footer.contact }}</router-link>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__rights">© 2022 Все права защищены
        </div><a class="footer__developed" href="https://www.a-lux.kz/" target="_blank">Разработано в A-Lux</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "vFooter",
  data() {
    return {
      footer: {}
    }
  },
  created() {
    this.axios.get('/api/title').then(res => {
      this.footer = res.data
    })
  }
}
</script>

<style scoped>

</style>