<template>
  <div id="home">
    <div id="homepage">
      <div class="header">
        <header>Topher Hospital</header>
        <p class="header-description">Keeping You Well</p>
      </div>
      <div class="main">
        <HomePage />
        <PatientRegistration />
      </div>
    </div>
  </div>
</template>
<script>
import HomePage from "@/components/HomePage.vue";
import PatientRegistration from "@/components/PatientRegistration.vue";
export default {
  components: { HomePage, PatientRegistration },
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style>
.main {
  display: flex;
  flex-direction: row;
  padding: 20px 0;
}
</style>
