<template>
  <header class="header">
    <div class="header__content">
      <div class="header__image">
        <router-link to="/">
          <img src="@/assets/logo.webp" alt="Logo">
        </router-link>
      </div>

      <div class="header__search-bar">
        <input
          type="text"
          name="search"
          id="search"
          v-model="search"
          placeholder="search"
          class="field-input header__search-bar__field-input"
        >
      </div>

      <div class="header__nav-items">
        <router-link :to="{name: 'home'}" class="header__nav-item header__nav-item--1">Home</router-link>
        <router-link
          :to="{name: 'register'}"
          class="header__nav-item header__nav-item--2"
        >Registration</router-link>
        <router-link :to="{name: 'login'}" class="header__nav-item header__nav-item--3">Login</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      search: ""
    };
  }
};
</script>


<style lang="scss" scoped>
.header {
  height: 7rem;
  background-color: $color-grey-light-1;
  padding: 0 2rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: $bp-md) {
    height: 8rem;
  }

  @media only screen and (max-width: $bp-sm) {
    height: auto;
    flex-direction: column;
    padding: 1rem 0;
  }

  &__content {
    width: 70%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: $bp-xl) {
      width: 100%;
    }
    @media only screen and (max-width: $bp-sm) {
      flex-direction: column;
    }
  }

  &__image {
    img {
      height: 4rem;
    }
  }

  &__search-bar {
    width: 100%;
    margin: 0 5rem;

    display: flex;
    justify-content: center;

    &__field-input {
      width: 100%;
      border-radius: 7px;
      padding: 0.5rem 2rem;

      @media only screen and (max-width: $bp-sm) {
        width: 70%;
        margin: 1rem 0;
      }
    }
  }

  &__nav-items {
    display: flex;
    font-family: $font-title;

    @media only screen and (max-width: $bp-sm) {
      width: 70%;
      justify-content: space-between;
    }

    & > *:not(:last-child) {
      margin-right: 2rem;

      @media only screen and (max-width: $bp-md) {
        margin-right: 1.3rem;
      }
    }
  }

  &__nav-item {
    text-decoration: none;
    font-size: 1.6rem;
    color: $color-primary-dark;
    cursor: pointer;
    transition: all 0.2s;
    padding: 0.5rem 1rem;

    @media only screen and (max-width: $bp-md) {
      padding: 0.1rem 0.2rem;
    }

    &:hover {
      color: $color-primary-light;
      font-size: 1.8rem;
    }

    &:active {
      font-size: 1.8rem;
      color: $color-primary;
    }

    &:focus {
      outline-color: $color-primary;
    }
  }
}
</style>