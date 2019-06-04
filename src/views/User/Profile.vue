<template>
  <div>
    <myHeader></myHeader>

    <section class="profile">
      <div class="profile__cover" :style="coverPic">
        <div class="profile__content">
          <div class="profile__content__picture">
            <img :src="profilePic" alt="Profile Picture">
          </div>
          <div class="profile__content__name">Walao - Singer</div>
        </div>
      </div>
    </section>

    <section class="main">
      <div class="main__genre">
        <div class="main__genre-title">
          <div class="main__genre-title--text">Genre:</div>
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
      <div class="flex-row flex-space-between">
        <div class="main__social">
          <div class="main__social--item">
            <img src="@/assets/icon_fb.png" alt="fb">
          </div>
          <div class="main__social--item">
            <img src="@/assets/icon_ig.png" alt="ig">
          </div>
          <div class="main__social--item">
            <img src="@/assets/icon_tw.png" alt="tw">
          </div>
        </div>
        <button class="btn main__book">Book Talent</button>
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
      profilePic: require("@/assets/p_ph.jpg"),
      genres: ["jazz", "pop", "edm", "classic"],
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
      margin-bottom: 2rem;

      img {
        height: 15rem;
        width: 15rem;
        border-radius: 100%;
        object-fit: cover;
      }
    }

    &__name {
      margin-top: 2rem;
      padding: 0.4rem 0;
      text-align: center;
      font-family: $font-title;
      font-size: 2rem;
      color: $color-secondary;
      background-image: linear-gradient(
        to right,
        rgba(#fff, 0.05),
        rgba(#fff, 0.9),
        rgba(#fff, 0.05)
      );
      width: 100%;
    }
  }
}

.main {
  padding: 5rem 10vw;

  &__genre {
    font-size: 1.4rem;
    font-weight: 700;
    color: $color-grey-dark-1;
    padding: 0 1rem;
    border: 1px solid $color-grey-light-1;
    border-radius: 1rem;
    margin-bottom: 2rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    &-content {
      &--items {
        display: flex;
        flex-wrap: wrap;
      }

      &--item {
        padding: 0.5rem 1rem;
        min-width: 7rem;
        text-align: center;
        color: $color-secondary;
        background-color: $color-grey-light-1;
        border-radius: 1rem;
        margin: 0.5rem 0;
        margin-left: 2rem;
      }
    }
  }

  &__social {
    color: $color-primary;
    align-self: flex-start;
    display: flex;
    margin-bottom: 2rem;

    &--item {
      cursor: pointer;
      width: 5rem;
      padding: 0.5rem;
      transition: all 0.2s;

      img {
        width: 100%;
        border-radius: 100%;
      }

      &:hover {
        padding: 0;
      }

      &:not(:last-child) {
        margin-right: 2rem;
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

