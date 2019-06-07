<template>
  <div>
    <myHeader></myHeader>

    <section class="banner">
      <img src="@/assets/banner-2.jpg" alt="banner">
    </section>

    <section class="filter">
      <div class="filter__header">
        <div class="filter__header--title">Filter</div>
        <div class="filter__header--separator">
          <hr>
        </div>
        <div class="filter__header--description">
          Short by experience talent you seek
          <br>Make apointment and deal
        </div>
      </div>
      <div class="filter__content">
        <form class="filter__content-form">
          <div class="filter__content-form__field filter__content-form__field--category">
            <div class="filter__content-form__field-head">
              <div class="filter__content-form__field-head--name">Categories</div>
              <div class="filter__content-form__field-head--separator">:</div>
            </div>
            <div class="filter__content-form__field-body">
              <div class="filter__content-form__field-body--input">
                <div class="field-selection">
                  <select required class="field-selection--select" v-model="category">
                    <option value hidden class="field-selection--option">Talent Category</option>
                    <option
                      v-for="cat in categoryList"
                      :key="cat"
                      class="field-selection--option"
                    >{{cat}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="filter__content-form__field filter__content-form__field--experience">
            <div class="filter__content-form__field-head">
              <div class="filter__content-form__field-head--name">Experience</div>
              <div class="filter__content-form__field-head--separator">:</div>
            </div>
            <div class="filter__content-form__field-body">
              <div class="filter__content-form__field-body--input">
                <div class="field-selection">
                  <select required class="field-selection--select" v-model="experience">
                    <option value hidden class="field-selection--option">Experience Level</option>
                    <option
                      v-for="exp in experienceLevel"
                      :key="exp"
                      class="field-selection--option"
                    >{{exp}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="filter__content-form__field filter__content-form__field--area">
            <div class="filter__content-form__field-head">
              <div class="filter__content-form__field-head--name">Area</div>
              <div class="filter__content-form__field-head--separator">:</div>
            </div>
            <div class="filter__content-form__field-body">
              <div class="filter__content-form__field-body--input">
                <input type="text" name="area" id="area" v-model="area" class="field-input">
              </div>
            </div>
          </div>
          <div class="filter__content-form__field filter__content-form__field--age">
            <div class="filter__content-form__field-head">
              <div class="filter__content-form__field-head--name">Age</div>
              <div class="filter__content-form__field-head--separator">:</div>
            </div>
            <div class="filter__content-form__field-body">
              <div class="filter__content-form__field-body--input">
                <vue-slider
                  v-model="age"
                  :enable-cross="false"
                  style="padding: 0"
                  v-bind="sliderOptions"
                ></vue-slider>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section class="catalog">
      <card
        class="catalog__card"
        v-for="talent in talents"
        :key="talent.id"
        :thumbnail="talent.thumbnail"
        :rating="talent.rating"
        :name="talent.name"
        :talent="talent.talent"
        :id="talent.id"
      ></card>
    </section>

    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from "@/components/Shared/Header";
import myFooter from "@/components/Shared/Footer";
import card from "@/components/Catalog/Card";

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  data() {
    return {
      categoryList: [
        "Singer",
        "MC",
        "Musisi",
        "DJ",
        "Dancer",
        "Badut",
        "Sulap"
      ],
      category: "",
      experienceLevel: [
        "Junior (< 5 tahun)",
        "Advance (5 - 10 tahun)",
        "Expert (> 10 tahun)"
      ],
      experience: "",
      area: "",
      age: [18, 25],
      sliderOptions: {
        tooltip: "always",
        tooltipPlacement: "bottom"
      },
      talents: [
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          id: "1",
          rating: "5",
          name: "Talent1",
          talent: "Singer"
        },
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          id: "2",
          rating: "4",
          name: "Talent2",
          talent: "Musician"
        },
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          id: "3",
          rating: "5",
          name: "Talent3",
          talent: "Dancer"
        },
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          id: "4",
          rating: "3",
          name: "Talent4",
          talent: "MC"
        },
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          id: "5",
          rating: "4",
          name: "Talent5",
          talent: "DJ"
        },
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          id: "6",
          rating: "2",
          name: "Talent6",
          talent: "Band"
        },
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          id: "7",
          rating: "5",
          name: "Talent7",
          talent: "Musician"
        },
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          id: "8",
          rating: "0",
          name: "Talent8",
          talent: "Singer"
        }
      ]
    };
  },
  components: {
    myHeader,
    myFooter,
    card,
    VueSlider
  }
};
</script>

<style lang="scss">
// VueSlider Theming
$bgColor: $color-grey-light-2;
$dotBgColor: $color-primary;
$tooltipBgColor: transparent;
$tooltipColor: $color-primary;
@import "~vue-slider-component/lib/theme/default.scss";
.vue-slider-process {
  background-color: $color-grey-light-2;
}
</style>


<style lang="scss" scoped>
.banner {
  line-height: 0;

  @media only screen and (max-width: $bp-sm) {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    max-height: 40rem;
    object-fit: cover;
  }
}

.filter {
  margin: 3rem 10vw;
  margin-bottom: 5rem;
  font-family: $font-title;
  border-right: 1px solid $color-grey-light-2;
  border-left: 1px solid $color-grey-light-2;

  display: flex;
  justify-content: flex-start;
  align-content: center;

  @media only screen and (max-width: $bp-sm) {
    flex-direction: column;
  }

  &__header {
    padding: 3rem;
    border-right: 1px solid $color-grey-light-2;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    &--title {
      text-transform: uppercase;
      font-size: 3rem;
      color: $color-primary;
    }

    &--separator {
      width: 5rem;

      hr {
        border: 1.5px solid $color-secondary;
        border-radius: 5px;
      }
    }

    &--description {
      font-size: 1.2rem;
      color: $color-primary;
      text-align: center;
      line-height: 2rem;
    }
  }

  &__content {
    flex: 1;
    padding: 3rem;

    &-form {
      font-size: 1.6rem;
      color: $color-primary;

      &__field {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width: $bp-sm) {
          flex-direction: column;
          align-items: flex-start;
        }

        &:not(:last-child) {
          margin-bottom: 2rem;
        }

        &-head {
          width: 30%;

          display: flex;
          justify-content: space-between;

          @media only screen and (max-width: $bp-lg) {
            width: 20%;
          }

          @media only screen and (max-width: $bp-md) {
            width: 35%;
          }

          &--name {
            text-transform: uppercase;
            align-self: center;
          }

          &--separator {
            padding: 0 2rem;
          }
        }

        &-body {
          flex: 1;

          @media only screen and (max-width: $bp-sm) {
            width: 100%;
          }
          &--input {
            .field-selection {
              width: 100%;
            }

            input {
              width: 100%;
              padding: 0.7rem 2rem;
            }
          }
        }
      }
    }
  }
}

.catalog {
  margin: 0 10vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: $bp-sm) {
    margin: 0 2vw;
  }

  &__card {
    background-color: #fff;
    width: 25%;

    @media only screen and (max-width: $bp-lg) {
      width: 33%;
    }

    @media only screen and (max-width: $bp-sm) {
      width: 50%;
    }
  }
}
</style>
