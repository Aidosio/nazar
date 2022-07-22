<template>
  <div class="contact">
    <div class="container">
      <h1 class="title">КОНТАКТНЫЕ ДАННЫЕ</h1>
      <div class="contact__inner">
        <form class="contact-form" @submit.prevent="onSend">
          <div class="contact-form__input required">
            <label class="icon-user">Имя</label>
            <input type="text" name="name" required>
          </div>
          <div class="contact-form__input required">
            <label class="icon-email">E-mail</label>
            <input type="email" name="email" required>
          </div>
          <div class="contact-form__input">
            <label class="icon-topic">Тема</label>
            <input type="text" name="title" required>
          </div>
          <div class="contact-form__input">
            <label class="icon-message">Сообщение</label>
            <textarea cols="30" rows="1" name="content" required></textarea >
          </div>
          <button class="btn" submit v-if="loader">ОТПРАВИТЬ</button>
          <button class="btn" submit v-else><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></button>
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
    <vAlert v-if="!loader" :text="text" />
  </div>
</template>

<script>
import vAlert from "@/ui/vAlert";
export default {
  name: "ContactView",
  components: {vAlert},
  data() {
    return {
      contacts: {},
      loader: true,
      text: ''
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
        this.loader = false
        this.text = 'Данные успешно отправлены'
        setTimeout(() => {
          this.loader = true
        }, 2500)
      }).catch(e => {
        e
        this.text = 'Ошибка'
      })
    }
  }
}
</script>

<style scoped>
.lds-ellipsis {
  position: relative;
  width: 80px;
  height: 20px;
  display: flex;
  align-items: center;
}
.lds-ellipsis div {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>