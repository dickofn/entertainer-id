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
          <h1 class="form__field-title">Login</h1>
          <input
            type="text"
            name="usernameOrEmail"
            id="usernameOrEmail"
            v-model="usernameOrEmail"
            placeholder="Username / Email"
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
          <div class="form__field-option">
            <div class="form__field-option-checkbox">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                v-model="remember"
                class="form__field-option-checkbox--box"
              >
              <label for="remember" class="form__field-option-checkbox--label">Remember me</label>
            </div>
            <router-link to="#" tag="button" class="form__field-btn form__field-option--forget">Forgot Password?</router-link>
          </div>
          <div class="form__field-btns">
            <button class="form__field-btn form__field-btn--login">Login</button>
            <router-link :to="{name: 'register'}">
              <button class="form__field-btn form__field-btn--register">Register</button>
            </router-link>
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
      usernameOrEmail: "",
      pass: "",
      remember: false,
      valid: false
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

.form {
  &__field-option {
    font-size: 1.4rem;
    position: relative;

    display: flex;
    justify-content: space-between;

    &-checkbox {
      &--box {
        position: absolute;
        top: 0.5rem;
        left: 1rem;
        height: 0;
        opacity: 0;
        cursor: pointer;
      }

      &--label {
        cursor: pointer;

        &:before {
          content: "";
          display: inline-block;
          vertical-align: text-top;
          margin: 0 0.5rem;
          margin-top: -0.15rem;
          height: 2rem;
          width: 2rem;
          border: 2px solid $color-primary;
          border-radius: 100%;
          background-color: #fff;
          transition: all 0.2s;
        }
      }

      &--box:focus + &--label:before {
        box-shadow: 0 0 0.5rem 0.1rem rgba($color-grey-dark-1, 0.5);
      }

      &--box:checked + &--label:before {
        border: 8px solid $color-primary;
        background-color: #fff;
      }
    }

    &--forget {
      margin-bottom: 2rem;
      width: 18rem !important;
    }
  }

  &__field-btns {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media only screen and (max-width: $bp-md) {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1rem;
    }

    @media only screen and (max-width: $bp-sm) {
      justify-content: flex-end;
    }
  }

  &__field-btn {
    font-family: $font-text;
    text-align: center;
    width: 8rem;
    padding: 0.5rem 0 0.5rem 0;
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

    &--login {
      margin-bottom: 2rem;

      @media only screen and (max-width: $bp-md) {
        margin-bottom: 0;
      }

      @media only screen and (max-width: $bp-sm) {
        margin-right: 2rem;
      }
    }
  }
}
</style>
