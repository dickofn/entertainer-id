<template>
  <div class="base">
    <div class="card">
      <div class="blur-effect"></div>
      <form action class="form">
        <div class="form__logo">
          <router-link :to="{name : 'home'}">
            <img src="@/assets/logo.webp" alt="Logo">
          </router-link>
        </div>
        <div class="form__field">
          <h1 class="form__field-title">Registration</h1>
          <div class="name__container">
            <input
              type="text"
              name="firstname"
              id="firstname"
              v-model="firstname"
              placeholder="First Name"
              class="field-input form__field-input--firstname"
            >
            <input
              type="text"
              name="lastname"
              id="lastname"
              v-model="lastname"
              placeholder="Last Name"
              class="field-input form__field-input--lastname"
            >
          </div>
          <input
            type="text"
            name="username"
            id="username"
            v-model="username"
            placeholder="Username"
            class="field-input form__field-input--username"
          >
          <input
            type="text"
            name="email"
            id="email"
            v-model="email"
            placeholder="Email"
            class="field-input form__field-input--email"
          >
          <input
            type="password"
            name="pass"
            id="pass"
            v-model="pass"
            placeholder="Password"
            class="field-input form__field-input--pass"
          >
          <input
            type="password"
            name="passVerif"
            id="passVerif"
            v-model="passVerif"
            placeholder="Password Verification"
            class="field-input form__field-input--pass"
          >
          <div class="form__field-btns">
            <button class="btn btn form__field-btn form__field-btn--register">Register</button>
            <router-link :to="{name : 'login'}" class="form__field-login">Already have account?</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      pass: "",
      passVerif: ""
    };
  },
  created() {
    document.querySelector("html").classList.add("customBody");
  },
  destroyed() {
    document.querySelector("html").classList.remove("customBody");
  }
};
</script>

<style lang="scss">
.customBody {
  background-color: $color-accent;
}
</style>

<style lang="scss" scoped>
@import "@/scss/_registration.scss";

.name {
  &__container {
    display: flex;
    justify-content: space-between;

    & > :not(:last-child) {
      margin-right: 1rem;
    }

    @media only screen and (max-width: $bp-sm) {
      flex-direction: column;
      justify-content: center;
    }

    .field-input {
      width: 100%;
    }
  }
}

.form {
  &__field-btns {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media only screen and (max-width: $bp-md) {
      justify-content: space-between;
      margin-top: 1rem;
      justify-content: flex-end;
    }
  }

  &__field-btn {
    height: 4rem;
    width: 16rem;
    margin-bottom: 1rem;
  }

  &__field-login {
    text-align: center;
    padding: 0 1rem;
  }
}
</style>

