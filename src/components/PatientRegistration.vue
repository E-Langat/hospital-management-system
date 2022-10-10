<template>
  <div id="patient-form">
    <form action="SUBMIT">
      <div>
        <h2 class="name">First Name</h2>
        <sup id="star"> &#9733; </sup>
        <input type="text" required class="text-input" />
      </div>
      <div>
        <h2 class="name">
          Middle Name <sup id="star"> &#9733; </sup>
          <input type="text" required class="text-input" />
        </h2>
      </div>
      <div>
        <h2 class="name">Last Name</h2>
        <sup id="star"> &#9733; </sup>
        <input type="text" required class="text-input" />
      </div>
      <div class="gender">
        <h2 for="gender">
          Gender
          <sup id="star">&#9733;</sup>
          <input type="radio" />
          <span>Male </span>
          <input type="radio" />
          <span>Female </span>
        </h2>
      </div>
      <div>
        <h2 class="birth">
          Date of Birth <sup id="star"> &#9733; </sup><input type="date" />
        </h2>
      </div>
      <div>
        <h2 class="blood-group">
          Blood Group <sup id="star"> &#9733; </sup>
          <select name="blood-groups" id="blood-groups">
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="AB+">AB+</option>
          </select>
        </h2>
      </div>
      <div>
        <h2 for="symptoms" class="symptoms">
          Symptoms
          <sup id="star"> &#9733; </sup>
          <textarea
            id="txtid"
            name="txtname"
            rows="5"
            cols="50"
            maxlength="300"
          >
            1.____
            2.____
          </textarea>
        </h2>
      </div>
      <div>
        <h2 for="diagnosis-report" class="diagnosis-report">
          Diagnosis Report
          <input type="file" />
        </h2>
      </div>
      <div>
        <h2 for="diagnosis-report" class="diagnosis-report">
          Diagnosis Report
          <input type="file" />
          <button class="delete">Delete</button>
        </h2>
      </div>
      <div class="more">
        <button>Add More Report</button>
      </div>
      <div>
        <h2 for="address" class="address">
          Address
          <sup id="star"> &#9733; </sup>
          <input type="text" class="text-input" />
        </h2>
      </div>
      <div>
        <h2 for="city" class="city">
          City
          <sup id="star"> &#9733; </sup>
          <input type="text" class="text-input" />
        </h2>
      </div>
      <div>
        <h2 for="state" class="state">
          State
          <input type="text" class="text-input" />
        </h2>
      </div>
      <div>
        <h2 for="zip code" class="zip-code">
          Zip code
          <sup id="star"> &#9733; </sup>
          <input type="number" class="text-input" />
        </h2>
      </div>
      <div>
        <h2 for="mobile" class="mobile">
          Mobile
          <sup id="star"> &#9733; </sup>
          <input type="number" class="first" />
          <input type="number" class="text-input" />
        </h2>
      </div>
      <div>
        <h2 for="phone" class="phone">
          Phone
          <input type="number" class="text-input" />
        </h2>
      </div>
      <div>
        <h2 for="email" class="email">
          Email
          <sup id="star"> &#9733; </sup>
          <input type="email" class="text-input" />
        </h2>
      </div>
      <div>
        <h2 for="username" class="username">
          Username
          <sup id="star"> &#9733; </sup>
          <input type="text" class="text-input" />
        </h2>
      </div>
      <div>
        <h2 for="password" class="password">
          Password
          <sup id="star"> &#9733; </sup>
          <input type="password" class="text-input" />
        </h2>
      </div>
      <div>
        <h2 for="image" class="image">
          Image
          <input type="file" accept=".png, .jpeg, .png" />
        </h2>
      </div>
      <button type="submit">Patient Registration</button>
    </form>
  </div>
</template>
<script>
export default {
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
<style scoped></style>
<style lang="scss" scoped></style>
