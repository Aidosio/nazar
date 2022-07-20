<template>
  <div class="contact">
    <div class="container">
      <h1 class="title">КОНТАКТНЫЕ ДАННЫЕ</h1>
      <div class="contact__inner">
        <form class="contact-form" @submit.prevent="onSend">
          <div class="contact-form__input required">
            <label class="icon-user">Имя</label>
            <input type="text" name="name">
          </div>
          <div class="contact-form__input required">
            <label class="icon-email">E-mail</label>
            <input type="email" name="email">
          </div>
          <div class="contact-form__input">
            <label class="icon-topic">Тема</label>
            <input type="text" name="title">
          </div>
          <div class="contact-form__input">
            <label class="icon-message">Сообщение</label>
            <textarea cols="30" rows="1" name="content"></textarea>
          </div>
          <button class="btn" submit>ОТПРАВИТЬ</button>
        </form>
        <div class="contact-info">
          <div v-for="contact in contacts" :key="contact.id" class="contact-info__item">
            <h2>{{ contact.city }}</h2>
            <div class="contact-info__subtitle icon-phone">{{ contact.type }}</div>
            <a href="tel:+77122271085" v-html="contact.content"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      contacts: {}
    }
  },
  async created() {
    await this.axios.get('/api/contact').then(res => {
      this.contacts = res.data
    })
  },
  methods: {
    async onSend(event) {
      const formData = new FormData(event.target)

      await this.axios.post('api/application', formData).then(res => {
        res
      })
    }
  }
}
</script>

<style scoped>

</style>