<template>
  <div>
    <my-header></my-header>

    <section class="banner" v-scroll-reveal>
      <img src="@/assets/banner.webp" alt="banner">
    </section>

    <section class="introduction" v-scroll-reveal>
      <div class="who">
        <div class="introduction__container">
          <div class="introduction__image"></div>
          <div class="introduction__content">
            <div class="introduction__content-header">
              <div class="introduction__content-header--title">Who We Are</div>
              <div class="introduction__content-header--addon"></div>
            </div>
            <div
              class="introduction__content-body"
            >" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, labore. Temporibus, repellendus, perspiciatis eveniet fugiat quod et quae autem maiores, sit expedita doloribus corporis quas cum nesciunt sed deleniti impedit? "</div>
          </div>
        </div>
      </div>
      <div class="what">
        <div class="introduction__container">
          <div class="introduction__content">
            <div class="introduction__content-header">
              <div class="introduction__content-header--addon"></div>
              <div class="introduction__content-header--title">What We Do</div>
            </div>
            <div
              class="introduction__content-body"
            >" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, labore. Temporibus, repellendus, perspiciatis eveniet fugiat quod et quae autem maiores, sit expedita doloribus corporis quas cum nesciunt sed deleniti impedit? "</div>
          </div>
          <div class="introduction__image"></div>
        </div>
      </div>
    </section>

    <section class="blog" v-scroll-reveal>
      <h1 class="heading-1 blog__title">Blog</h1>
      <p
        class="paragraph blog__text"
      >While this website still on progress, please kindly check our blog with the button bellow, thanks</p>

      <a href="http://blog.entertainer.id" class="blog__btn">Blog</a>
    </section>

    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from "@/components/Shared/Header";
import myFooter from "@/components/Shared/Footer";
export default {
  components: {
    myHeader,
    myFooter
  }
};
</script>


<style lang="scss" scoped>
.header {
  background-color: rgba(#fff, 0.8);
  position: fixed;
  z-index: 3;
}

.banner {
  line-height: 0;
  background-image: url("~@/assets/banner.webp");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  @media only screen and (max-width: $bp-xl) {
    background-size: contain;
  }

  img {
    width: 100%;
    opacity: 0;
  }
}

.introduction {
  padding: 10rem 20rem;

  @media only screen and (max-width: $bp-md) {
    padding: 10rem 0rem;
  }

  & > :not(:last-child) {
    margin-bottom: 5rem;
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: $bp-md) {
      flex-direction: column;
    }

    .introduction {
      &__image {
        padding: 0 1rem;
        width: 45%;
        height: 25rem;
        background-color: #fff;

        @media only screen and (max-width: $bp-md) {
          width: 100%;
        }
      }

      &__content {
        width: 55%;
        padding: 5rem;

        @media only screen and (max-width: $bp-md) {
          width: 100%;
        }

        &-header {
          display: flex;

          &--title {
            font-size: 2.4rem;
            font-weight: 700;
            color: $color-primary;
          }
          &--addon {
            flex: 1;
            align-self: flex-end;
            height: 0.5rem;
            background-color: $color-secondary;
            border-radius: 1rem;
          }
        }

        &-body {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
    }
  }

  .who {
    .introduction__image {
      border-right: 1px solid $color-grey-light-2;

      @media only screen and (max-width: $bp-md) {
        border: none;
      }
    }
  }
  .what {
    .introduction__container {
      @media only screen and (max-width: $bp-md) {
        flex-direction: column-reverse;
      }
    }
    .introduction__image {
      border-left: 1px solid $color-grey-light-2;

      @media only screen and (max-width: $bp-md) {
        border: none;
      }
    }
  }
}

.blog {
  margin: 0 auto;
  padding: 5rem 0;
  width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__btn {
    margin-top: 3rem;
    padding: 1rem 0;
    width: 13rem;
    background-color: $color-grey-light-1;
    border-radius: 5rem;

    text-decoration: none;
    text-align: center;
    font-size: 1.6rem;
    color: $color-primary-dark;
    transition: all 0.2s;

    &:hover,
    &:focus {
      outline: none;
      background-color: $color-primary;
      color: $color-grey-light-1;
    }

    &:active {
      transform: scale(0.9);
    }
  }

  &__text {
    text-align: center;
  }
}
</style>
