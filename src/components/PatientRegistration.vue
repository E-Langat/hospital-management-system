<template>
  <div id="patient-form">
    <form action="SUBMIT">
      <div class="row">
        <div class="first">
          <h2 class="name">First Name</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="text" required class="text-input" />
      </div>
      <div class="row">
        <div class="first">
          <h2 class="name">Middle Name</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="text" required class="text-input" />
      </div>
      <div class="row">
        <div class="first">
          <h2 class="name">Last Name</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="text" required class="text-input" />
      </div>
      <div class="row">
        <div class="first">
          <h2 for="gender">Gender</h2>
          <sup id="star">&#9733;</sup>
        </div>
        <div class="gender">
          <input type="radio" />
          <span>Male </span>
          <input type="radio" />
          <span>Female </span>
        </div>
      </div>
      <div class="row">
        <div class="first">
          <h2 class="birth">Date of Birth</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="date" class="date" />
      </div>
      <div class="row">
        <div class="first">
          <h2>Blood Group</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <select name="blood-groups" id="blood-groups" class="blood-group">
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="AB-">AB-</option>
          <option value="AB+">AB+</option>
        </select>
      </div>
      <div class="row">
        <div class="first">
          <h2 for="symptoms" class="symptoms">Symptoms</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <textarea
          id="txtid"
          name="txtname"
          rows="5"
          cols="50"
          maxlength="300"
          placeholder="Enter the symptoms"
          class="text-field"
        ></textarea>
      </div>

      <div>
        <div class="row">
          <h2 for="diagnosis-report" class="diagnosis-report">
            Diagnosis Report
          </h2>
          <div class="file">
            <input type="file" class="file" />
            <button class="delete">Delete</button>
          </div>
        </div>
        <div class="report">
          <button class="more">Add More Report</button>
        </div>
      </div>
      <div class="row">
        <div class="first">
          <h2 for="address" class="address">Address</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="text" class="text-input" />
      </div>
      <div class="row">
        <div class="first">
          <h2 for="city" class="city">City</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="text" class="text-input" />
      </div>
      <div class="row">
        <h2 for="state" class="state">State</h2>
        <input type="text" class="text-input" />
      </div>
      <div class="row">
        <div class="first">
          <h2 for="zip code" class="zip-code">Zip code</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="number" class="text-input" />
      </div>
      <div class="row">
        <div class="first">
          <h2 for="mobile">Mobile</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <div class="mobile">
          <input type="number" class="first" min="1" placeholder="+254" />
          <input type="number" class="text-input" />
        </div>
      </div>
      <div class="row">
        <h2 for="phone" class="phone">Phone</h2>
        <input type="number" class="text-input" />
      </div>
      <div class="row">
        <div class="first">
          <h2 for="email" class="email">Email</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="email" class="text-input" />
      </div>
      <div class="row">
        <div class="first">
          <h2 for="username" class="username">Username</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="text" class="text-input" />
      </div>
      <div class="row">
        <div class="first">
          <h2 for="password" class="password">Password</h2>
          <sup id="star"> &#9733; </sup>
        </div>
        <input type="password" class="text-input" />
      </div>
      <div class="row">
        <h2 for="image" class="image">Image</h2>
        <input type="file" accept=".png, .jpeg, .png" />
      </div>
      <div class="submit-button">
        <button type="submit">Patient Registration</button>
      </div>
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
