<template>
  <div class="card">
    <div class="card__header">
      <img
        :src="thumbnail"
        :alt="'picture of' + name"
        :class="{'card__header-img' : true , 'card__header-img--small' : type=='small'}"
      >
      <div class="card__header-stars">
        <span
          class="card__header-star card__header-star--filled"
          v-for="star in (rating-0)"
          :key="star*Math.random()"
        >&#9733;</span>
        <span
          class="card__header-star card__header-star--empty"
          v-for="emptyStar in (5-rating)"
          :key="emptyStar*Math.random()"
        >&#9734;</span>
      </div>
    </div>
    <div class="card__body">
      <div class="card__body-btns">
        <div class="card__body-btn card__body-btn--chat">
          <img
            class="card__body-btn-icon card__body-btn-icon--chat"
            src="@/assets/btn_chat.png"
            alt="chat"
            title="Chat"
          >
        </div>
        <div class="card__body-btn card__body-btn--bookmark">
          <img
            class="card__body-btn-icon card__body-btn-icon--bookmark"
            src="@/assets/btn_bookmark.png"
            alt="bookmark"
            title="Bookmark"
          >
        </div>
        <div class="card__body-btn card__body-btn--schedule">
          <img
            class="card__body-btn-icon card__body-btn-icon--schedule"
            src="@/assets/btn_schedule.png"
            alt="schedule"
            title="Book Now"
          >
        </div>
      </div>
      <div class="card__body-name">{{ name }}</div>
      <div class="card__body-talent">{{ talent }}</div>
      <div class="card__body-btn">
        <button class="btn card__body-btn--button" @click="seeProfile(id)">See Profile</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thumbnail", "name", "rating", "talent", "id", "type"],
  methods: {
    seeProfile (id) {
      this.id = id;
      this.$router.push({ name: "profile" });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &__header {
    width: 90%;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    &-img {
      border-radius: 100%;
      width: 20rem;
      height: 20rem;
      object-fit: cover;
      margin-bottom: 2rem;

      &--small {
        width: 10rem;
        height: 10rem;
      }
    }

    &-star {
      font-size: 2.4rem;
      color: $color-secondary;
    }
  }

  &__body {
    width: 90%;
    border-right: 1px solid $color-grey-light-2;
    border-left: 1px solid $color-grey-light-2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &-btns {
      display: flex;

      .card__body {
        &-btn {
          cursor: pointer;
          width: 3rem;
          height: 3rem;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s;

          &:hover {
            padding: 0;
          }

          &-icon {
            width: 100%;
          }

          &:not(last-child) {
            margin-bottom: 1rem;
          }
        }
      }
    }

    &-name {
      padding-top: 3rem;
      margin-bottom: 3rem;
      font-family: $font-title;
      font-size: 2rem;
      text-transform: uppercase;
    }

    &-talent {
      margin-bottom: 3rem;
      font-size: 1.4rem;
      font-style: italic;
    }

    &-btn {
      margin-bottom: 3rem;

      &--button {
        padding: 1rem 2rem;
        font-family: $font-title;
        background-color: $color-secondary;
        color: #fff;
        border: none;

        &:active {
          background-color: $color-primary;
          border: 0;
        }
      }
    }
  }
}
</style>
