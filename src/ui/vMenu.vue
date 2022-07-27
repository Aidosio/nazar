<template>
  <header class="header">
    <vContainer>
      <div class="header__inner">
        <button class="burger-btn" @click="isOpen = !isOpen"><img src="../assets/icons/burger.svg" alt="icon"></button>
        <router-link class="header__logo" to="/"><img :src="menu.logo" alt="logo"></router-link>
        <div class="header__nav">
          <div class="header__links">
            <div class="header__item"><router-link class="header__link" to="/">{{ menu.about }}</router-link>
            </div>
            <div class="header__item services-link">
              <a class="header__link" href="#" @mouseenter="isActive = true">Услуги</a>
              <div
                  @mouseleave="isActive = false"
                  class="services-dropdown"
                  :class="{'is-active': isActive}">
                <router-link v-for="services in menu.services"
                             :key="services.id"
                             class="services-dropdown__link"
                             :to="{
                  name: 'service',
                  params: {
                    id: services.id
                  }
                }">{{ services.title }}</router-link>
              </div>
            </div>
            <div class="header__item"><router-link class="header__link" to="/achievements">{{ menu.achievement }}</router-link>
            </div>
            <div class="header__item"><router-link class="header__link" to="/contact">{{ menu.contact }}</router-link>
            </div>
          </div>
          <div class="language">
            <div class="language__item is-active">
              {{ menu.lang }}
            </div>
          </div>
        </div>
      </div>
      <div class="burger-menu" :class="{'is-open': isOpen}">
        <button class="burger-btn" @click="isOpen = !isOpen"><img src="../assets/icons/burger.svg" alt="icon"></button>
        <div class="burger-menu__links">
          <div class="burger-menu__item"><a class="burger-menu__link is-active" href="#">{{ menu.about }}</a>
          </div>
          <div class="burger-menu__item services-link" @click="isActive = !isActive">
            <a class="burger-menu__link" href="#">Услуги</a>
            <div
                 v-for="services in menu.services"
                 :key="services.id"
                 class="services-dropdown"
                 :class="{'is-active': isActive}">
              <router-link class="services-dropdown__link" :to="{
                  name: 'service',
                  params: {
                    id: services.id
                  }
                }">{{ services.title }}</router-link>
            </div>
          </div>
          <div class="burger-menu__item"><router-link class="burger-menu__link" to="/achievements">{{ menu.achievement }}</router-link>
          </div>
          <div class="burger-menu__item"><router-link class="burger-menu__link" to="/contact">{{ menu.contact }}</router-link>
          </div>
        </div>
      </div>
    </vContainer>
  </header>
</template>

<script>
export default {
  name: "vMenu",
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActive: false,
      isOpen: false,
    }
  },
}
</script>

<style scoped>
.header {
  position: absolute;
  z-index: 10;
}
</style>
