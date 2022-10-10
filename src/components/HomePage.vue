<template>
  <div class="one">
    <div class="hospital-description">
      <img
        src="../assets/cropped-logo_hospital.png"
        alt="Hospital Icon"
        class="hospital-icon"
      />
      <h1>Topher Hospital</h1>
      <p>Hospital Management System</p>
    </div>
    <div class="homepage-links">
      <router-link to="login">
        <h2>Hospital Management Login</h2>
      </router-link>
      <router-link to="patient_registration">
        <h2>Patient Registration</h2>
      </router-link>
      <router-link to="admin">
        <h2>Admin</h2>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  components: {},
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
</style>
