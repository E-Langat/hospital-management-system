<template>
  <div id="login">
    <div class="two">
      <div class="login">
        <div class="inputs">
          <input
            type="text"
            class="email-input"
            placeholder="Username or Email Address"
          />
          <input
            type="password"
            class="password-input"
            placeholder="Password"
          />
        </div>
        <div class="checkbox">
          <input type="checkbox" />
          <p>Remember Me</p>
        </div>
        <div class="login-button">
          <button>LOG IN</button>
          <span>
            <p>Or Login as</p>
            <img src="../assets/down-arrow.png" alt="Arrow pointing down" />
          </span>
        </div>
        <div class="persona">
          <figure>
            <img src="../assets/doctor.png" alt="Doctor icon" />
            <figcaption>Doctor</figcaption>
          </figure>
          <figure>
            <img src="../assets/patient.png" alt="Patient icon" />
            <figcaption>Patient</figcaption>
          </figure>
          <figure>
            <img src="../assets/technician.png" alt="A lab technician icon" />
            <figcaption>Pathologist</figcaption>
          </figure>
          <figure>
            <img src="../assets/inventory.png" alt="Drugs icon" />
            <figcaption>Inventory</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HomePage from "./HomePage.vue";
export default {
  components: { HomePage },
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style scoped>
</style>
<style lang='scss' scoped>
</style>