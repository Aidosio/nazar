<template>
  <div class="main-hero">
    <div class="main-hero__inner container">
      <h1 class="title" v-html="index.main.title" />
      <h2 class="subtitle" v-html="index.main.content" />
    </div>
  </div>
  <MainAboutComponent :about="index.about" :text="titles.about"/>
  <MainGoalComponent :mission="index.mission" :text="titles.mission"/>
  <MainWhyComponent :whys="index.why" :text="titles.why"/>
</template>

<script>
import MainAboutComponent from "@/components/MainAboutComponent";
import MainGoalComponent from "@/components/MainGoalComponent";
import MainWhyComponent from "@/components/MainWhyComponent";

export default {
  name: "MainView",
  components: {MainWhyComponent, MainGoalComponent, MainAboutComponent},
  data() {
    return {
      index: {},
      titles: {}
    }
  },
  created() {
    this.axios.get('/api/index').then(res => {
      this.index = res.data
    })
  },
  mounted() {
    this.axios.get('/api/title').then(res => {
      this.titles = res.data
    })
  }
}
</script>

<style>
</style>