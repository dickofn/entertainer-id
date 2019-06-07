<template>
  <div>
    <my-header></my-header>

    <section class="banner" v-scroll-reveal>
      <img src="@/assets/banner.webp" alt="banner">
    </section>

    <section class="introduction" v-scroll-reveal>
      <div class="who">
        <div class="introduction__container">
          <div class="introduction__image">
            <img src="@/assets/landing-1.png" alt="dance">
          </div>
          <div class="introduction__content">
            <div class="introduction__content-header header-1">
              <div class="introduction__content-header--title">Who We Are</div>
              <div class="introduction__content-header--addon flex-fill-line"></div>
            </div>
            <div
              class="introduction__content-body header-2"
            >" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, labore. Temporibus, repellendus, perspiciatis eveniet fugiat quod et quae autem maiores, sit expedita doloribus corporis quas cum nesciunt sed deleniti impedit? "</div>
          </div>
        </div>
      </div>
      <div class="what">
        <div class="introduction__container">
          <div class="introduction__content">
            <div class="introduction__content-header header-1">
              <div class="introduction__content-header--addon flex-fill-line"></div>
              <div class="introduction__content-header--title">What We Do</div>
            </div>
            <div
              class="introduction__content-body header-2"
            >" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, labore. Temporibus, repellendus, perspiciatis eveniet fugiat quod et quae autem maiores, sit expedita doloribus corporis quas cum nesciunt sed deleniti impedit? "</div>
          </div>
          <div class="introduction__image">
            <img src="@/assets/landing-2.png" alt="note">
          </div>
        </div>
      </div>
    </section>

    <section class="carousel" v-scroll-reveal>
      <vueper-slides :parallax="1" autoplay fixed-height>
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :link="slide.link"
          :title="slide.title"
          :content="slide.content"
        ></vueper-slide>
      </vueper-slides>
    </section>

    <section class="blog" v-scroll-reveal>
      <div class="blog__content">
        <div class="blog__content-header header-1">
          <div class="blog__content-header--title">Blog</div>
          <div class="blog__content-header--addon flex-fill-line"></div>
        </div>
        <div
          class="blog__content-body header-2"
        >While this website still on progress, please kindly check our blog with the button bellow, thanks</div>
      </div>

      <a href="http://blog.entertainer.id" class="blog__btn">Blog</a>
    </section>

    <my-footer></my-footer>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import myHeader from "@/components/Shared/Header";
import myFooter from "@/components/Shared/Footer";

export default {
  data() {
    return {
      slides: [
        {
          title: "<p class='carousel__title'> Cafe 1 </p>",
          image:
            "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/18/1435/Hyatt-City-of-Dreams-Manila-P004-Cafe.jpg/Hyatt-City-of-Dreams-Manila-P004-Cafe.16x9.adapt.1920.1080.jpg",
          content: "<p class='carousel__desc'> Cafe Desc </p>",
          link: "#link-to-article-1"
        },
        {
          title: "<p class='carousel__title'> Cafe 2 </p>",
          image:
            "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2016/05/24/1634/Grand-Hyatt-Hong-Kong-P946-Grand-Cafe.jpg/Grand-Hyatt-Hong-Kong-P946-Grand-Cafe.16x9.adapt.1920.1080.jpg",
          content: "<p class='carousel__desc'> Cafe Desc </p>",
          link: "#link-to-article-2"
        }
      ]
    };
  },
  components: {
    VueperSlides,
    VueperSlide,
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

  @media only screen and (max-width: $bp-sm) {
    position: relative;
  }
}

.banner {
  line-height: 0;
  background-image: url("~@/assets/banner.webp");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100vw auto;

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

    @media only screen and (max-width: $bp-sm) {
      flex-direction: column;
    }

    .introduction {
      &__image {
        padding: 0 1rem;
        width: 45%;
        background-color: #fff;
        min-height: 40rem;

        display: flex;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: $bp-sm) {
          min-height: 0;
          width: 50%;
        }

        img {
          width: 100%;
        }
      }

      &__content {
        width: 55%;
        padding: 5rem;

        @media only screen and (max-width: $bp-sm) {
          width: 100%;
        }

        &-header {
          display: flex;

          &--title {
            color: $color-primary;
          }
        }
      }
    }
  }

  .who {
    .introduction__image {
      border-right: 1px solid $color-grey-light-2;

      @media only screen and (max-width: $bp-sm) {
        border: none;
      }
    }
  }
  .what {
    .introduction__container {
      @media only screen and (max-width: $bp-sm) {
        flex-direction: column-reverse;
      }
    }
    .introduction__image {
      border-left: 1px solid $color-grey-light-2;

      @media only screen and (max-width: $bp-sm) {
        border: none;
      }
    }
  }
}

.blog {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 10rem 20rem;

  @media only screen and (max-width: $bp-md) {
    padding: 10rem 5rem;
  }

  .blog {
    &__content {
      &-header {
        display: flex;

        &--title {
          color: $color-primary;
        }
      }
      &-body {
        text-align: center;
      }
    }
  }

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
}
</style>

<style lang="scss">
.vueperslides__arrow {
  fill: #fff;
}
.vueperslides--fixed-height {
  height: 40rem;

  @media only screen and (max-width: $bp-sm) {
    height: 45rem;
  }
}
.carousel {
  &__title {
    font-size: 3rem;
    color: $color-primary;
    width: 50vw;
    background-image: linear-gradient(
      to right,
      rgba(#fff, 0),
      rgba(#fff, 1),
      rgba(#fff, 0)
    );
  }
  &__desc {
    font-size: 2.4rem;
    color: $color-grey-dark-1;
    width: 50vw;
    background-image: linear-gradient(
      to right,
      rgba(#fff, 0),
      rgba(#fff, 1),
      rgba(#fff, 0)
    );
  }
}
</style>

