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
            <button class="form__field-btn form__field-btn--register">Register</button>
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
    font-family: $font-text;
    text-align: center;
    height: 4rem;
    width: 16rem;
    padding: 0.5rem 0 0.5rem 0;
    margin-bottom: 1rem;
    border: 1px solid $color-grey-light-1;
    border-radius: 2rem;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 0.5rem 0.1rem rgba($color-grey-dark-1, 0.3);
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 0rem 0.5rem 0.3rem rgba($color-primary, 0.3);
    }

    &:active {
      border: 1px solid $color-primary;
      background-color: $color-primary;
      color: #fff;
      box-shadow: 0 0 0.5rem 0.1rem rgba($color-grey-dark-1, 0.3);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0rem 0.5rem 0.3rem rgba($color-primary, 0.3);
    }
  }

  &__field-login {
    text-align: center;
    padding: 0 1rem;
  }
}
</style>

