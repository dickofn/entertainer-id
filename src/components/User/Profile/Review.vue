<template>
  <div class="review">
    <div class="review__card" v-for="(review, i) in reviews" :key="i">
      <div class="review__card-picture">
        <img :src="review.thumbnail" :alt="'review-' + (i + 1)">
      </div>
      <div class="review__card-content">
        <div class="review__card-content--header">
          <div class="review__card-content--header-name">{{ review.name }}</div>
          <div class="review__card-content--header-rating">
            <span
              class="review__card-content--rating-star"
              v-for="star in review.rating"
              :key="star"
            >&#9733;</span>
          </div>
        </div>
        <div class="review__card-content--description">{{ review.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reviews: [
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          url: "url",
          rating: 4,
          name: "Lorem",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid quam tempora aperiam dolor, dicta ex magni voluptatibus, molestiae assumenda doloribus commodi, quos vitae laudantium earum explicabo laborum accusamus fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint beatae facilis labore doloremque voluptatibus, repellat molestiae dolorum inventore blanditiis necessitatibus alias. Laborum sequi dolore reprehenderit, magni nesciunt quo aspernatur a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id sunt voluptate reiciendis iure, ipsa rerum laborum quam quae quia eum ducimus odio odit cupiditate cum provident quidem neque qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, inventore! Odit adipisci tenetur quisquam maiores rerum nostrum quod nihil soluta aliquid enim, omnis sed, obcaecati repudiandae. Error explicabo provident laborum!"
        },
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          url: "url",
          rating: 5,
          name: "Ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid quam tempora aperiam dolor, dicta ex magni voluptatibus, molestiae assumenda doloribus commodi, quos vitae laudantium earum explicabo laborum accusamus fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint beatae facilis labore doloremque voluptatibus, repellat molestiae dolorum inventore blanditiis necessitatibus alias. Laborum sequi dolore reprehenderit, magni nesciunt quo aspernatur a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id sunt voluptate reiciendis iure, ipsa rerum laborum quam quae quia eum ducimus odio odit cupiditate cum provident quidem neque qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, inventore! Odit adipisci tenetur quisquam maiores rerum nostrum quod nihil soluta aliquid enim, omnis sed, obcaecati repudiandae. Error explicabo provident laborum!"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.review {
  &__card {
    padding: 3rem;

    display: flex;
    align-items: center;

    @media only screen and (max-width: $bp-sm) {
      align-items: flex-start;
    }

    &-picture {
      img {
        border: 3px solid $color-primary;
        border-radius: 100%;
        height: 15rem;
        width: 15rem;
        margin-right: 5rem;
        object-fit: cover;

        @media only screen and (max-width: $bp-sm) {
          height: 8rem;
          width: 8rem;
        }
      }
    }

    &-content {
      &--header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-name {
          font-family: $font-title;
          font-size: 1.5rem;
          font-weight: 600;
        }

        &-rating {
          font-family: $font-title;
          font-size: 3rem;
          color: $color-primary;
        }
      }

      &--description {
        font-size: 1.1rem;
      }
    }

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
}
</style>
