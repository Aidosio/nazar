
<template>
  <vLoader v-if="index === null" />
  <div v-else>
    <div class="main-hero">
      <div class="main-hero__inner container">
        <h1 class="title" v-html="index.main.title" />
        <h2 class="subtitle" v-html="index.main.content" />
      </div>
    </div>
    <MainAboutComponent :about="index.about" :text="main.about"/>
    <MainGoalComponent :mission="index.mission" :text="main.mission"/>
    <MainWhyComponent :whys="index.why" :text="main.why"/>
  </div>
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
      index: null,
      main: {}
    }
  },
  async created() {
    await this.axios.get('/api/title').then(res => {
      this.main = res.data
    })
    await this.axios.get('/api/index').then(res => {
      this.index = res.data
    })
  },
}
</script>

<style>
</style>