<template>
  <div>
    <myHeader></myHeader>

    <section class="profile">
      <div class="profile__cover" :style="coverPic">
        <div class="profile__content">
          <div class="profile__content__picture--bg">
            <div class="profile__content__picture--pic" :style="profilePic"></div>
          </div>
          <div class="profile__content__name">Walao - Singer</div>
        </div>
        <div class="profile__social">
          <div class="profile__social--item">
            <img :src="'./img/icon_fb.png'" alt="fb">
          </div>
          <div class="profile__social--item">
            <img :src="'./img/icon_ig.png'" alt="ig">
          </div>
          <div class="profile__social--item">
            <img :src="'./img/icon_tw.png'" alt="tw">
          </div>
        </div>
      </div>
    </section>

    <section class="main">
      <div class="main__genre">
        <div class="main__genre-title">
          <div class="main__genre-title--text">Genre :</div>
          <div class="main__genre-title--add">
            <button>&plus;</button>
          </div>
        </div>
        <div class="main__genre-content">
          <div class="main__genre-content--items">
            <div
              class="main__genre-content--item"
              v-for="(genre,index) in genres"
              :key="index"
            >{{ genre }}</div>
          </div>
        </div>
      </div>
      <div class="main__schedule">
        <div class="main__schedule-title">
          <div class="main__schedule-title--text">Upcoming Show :</div>
        </div>
        <div class="main__schedule-content">
          <div class="main__schedule-content--calendar"></div>
        </div>
      </div>
    </section>

    <section class="tabbed">
      <div class="tabbed__menu">
        <div
          class="tabbed__menu-item tabbed__menu-item--1"
          :class="{'tabbed__menu-item--active': currentTab=='Bio'}"
          @click="menuChanged('Bio')"
        >Bio</div>
        <div
          class="tabbed__menu-item tabbed__menu-item--2"
          :class="{'tabbed__menu-item--active': currentTab=='Music'}"
          @click="menuChanged('Music')"
        >Music</div>
        <div
          class="tabbed__menu-item tabbed__menu-item--3"
          :class="{'tabbed__menu-item--active': currentTab=='Video'}"
          @click="menuChanged('Video')"
        >Video</div>
        <div
          class="tabbed__menu-item tabbed__menu-item--4"
          :class="{'tabbed__menu-item--active': currentTab=='Review'}"
          @click="menuChanged('Review')"
        >Review</div>
      </div>

      <keep-alive>
        <transition name="slide-fade" mode="out-in">
          <component :is="currentTab" class="tabbed__content"></component>
        </transition>
      </keep-alive>
    </section>

    <my-footer></my-footer>
  </div>
</template>

<script>
/**
 * TODO:
 * yang pakai css bg url itu nanti di taro di inline-style jadinya :style="variable" sehingga cover bisa ubah ubah
 */
import myHeader from "@/components/Shared/Header";
import myFooter from "@/components/Shared/Footer";
import Bio from "@/components/User/Profile/Bio";
import Music from "@/components/User/Profile/Music";
import Video from "@/components/User/Profile/Video";
import Review from "@/components/User/Profile/Review";

export default {
  data() {
    return {
      coverPic: {
        background: "url(" + require("@/assets/p_bg.png") + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
      profilePic: {
        background: "url(" + require("@/assets/p_ph.jpg") + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
      genres: [
        "jazz",
        "pop",
        "edm",
        "classic",
      ],
      currentTab: "Bio"
    };
  },
  methods: {
    menuChanged(payload) {
      this.currentTab = payload;
    }
  },
  components: {
    myHeader,
    myFooter,
    Bio,
    Music,
    Video,
    Review
  }
};
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 5rem;

  &__cover {
    background-color: $color-grey-light-1;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__content {
    padding: 5rem 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: $bp-sm) {
      padding-bottom: 1rem;
    }

    &__picture {
      &--bg {
        width: 15rem;
        height: 15rem;
        border-radius: 3rem;
        position: relative;
        background-color: $color-primary;
      }

      &--pic {
        top: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        bottom: 0.5rem;
        position: absolute;
        border-radius: 2.5rem;
        z-index: 1;
      }
    }

    &__name {
      margin-top: 2rem;
      padding: 0.4rem 0;
      text-align: center;
      font-family: $font-title;
      font-size: 2rem;
      color: $color-primary;
      background-color: rgba(#fff, 0.5);
      width: 100%;
    }
  }

  &__social {
    position: absolute;
    top: 3rem;
    left: 3rem;
    padding: 0.5rem 2rem;
    color: $color-primary;
    border-radius: 1rem;
    align-self: flex-start;
    display: flex;

    @media only screen and (max-width: $bp-sm) {
      position: relative;
      top: auto;
      left: auto;
      padding-bottom: 1rem;
      align-self: auto;
    }

    &--item {
      cursor: pointer;
      line-height: 0;
      width: 5rem;
      background-color: rgba(#fff, 0.5);
      border-radius: 1.5rem;
      padding: 0.5rem;
      transition: all 0.2s;

      img {
        width: 100%;
      }

      &:hover {
        padding: 0;
      }

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
}

.main {
  padding: 5rem 10vw;

  &__genre {
    font-size: 2rem;
    font-weight: 700;
    color: $color-primary;

    &-title {
      margin-bottom: 2rem;

      display: flex;
      justify-content: space-between;

      &--add {
        button {
          cursor: pointer;
          background-color: $color-grey-light-1;
          font-size: 2rem;
          color: $color-primary;
          width: 3rem;
          border-radius: 100%;

          &:focus {
            outline: none;
          }
        }
      }
    }

    &-content {
      padding: 0.5rem 1rem;
      border: 1px solid $color-grey-light-1;
      border-radius: 1rem;
      font-size: 1.4rem;
      margin-bottom: 2rem;

      &--items {
        display: flex;
        flex-wrap: wrap;
      }

      &--item {
        padding: 0.5rem 1rem;
        color: $color-primary;
        background-color: $color-grey-light-1;
        border-radius: 1rem;
        margin: 0.5rem 0;
        margin-left: 2rem;
      }
    }
  }

  &__schedule {
    &-title {
      margin-bottom: 2rem;

      &--text {
        font-size: 2rem;
        font-weight: 700;
        color: $color-primary;
      }
    }

    &-content {
      padding: 2rem 3rem;
      border: 1px solid $color-grey-light-1;
      border-radius: 1rem;

      &--calendar {
        border-radius: 1rem;
        background-color: $color-primary;
        height: 50rem; // TODO: fixed height, content coming soon
      }
    }
  }
}

.tabbed {
  background-color: $color-grey-light-1;
  padding: 4rem 10vw;

  &__menu {
    margin-bottom: 4rem;

    display: flex;
    justify-content: space-between;

    &-item {
      background-color: $color-grey-light-2;
      text-align: center;
      font-family: $font-title;
      color: $color-primary;
      font-size: 2rem;
      width: 25rem;
      padding: 0.5rem 0;
      border-radius: 1rem;
      transition: all 0.2s;

      &:not(:last-child) {
        margin-right: 4rem;

        @media only screen and (max-width: $bp-sm) {
          margin-right: 1rem;
        }
      }

      &:hover {
        background-color: $color-primary;
        color: #fff;
        cursor: pointer;
      }

      &:active {
        background-color: $color-primary-dark;
      }

      &--active {
        background-color: $color-primary;
        color: #fff;
      }
    }
  }
}

.footer {
  margin-top: 5rem;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10%);
  opacity: 0;
}
</style>

