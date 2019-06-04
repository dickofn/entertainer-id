<template>
  <div class="video">
    <div class="video__card" v-for="(video, i) in videos" :key="i">
      <div class="video__card-picture">
        <img :src="video.thumbnail" :alt="'video-' + (i + 1)">
      </div>
      <div class="video__card-content">
        <div class="video__card-content--title">{{ video.title }}</div>
        <div class="video__card-content--description">{{ video.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          url: "url",
          title: "Walao - Song 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid quam tempora aperiam dolor, dicta ex magni voluptatibus, molestiae assumenda doloribus commodi, quos vitae laudantium earum explicabo laborum accusamus fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint beatae facilis labore doloremque voluptatibus, repellat molestiae dolorum inventore blanditiis necessitatibus alias. Laborum sequi dolore reprehenderit, magni nesciunt quo aspernatur a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id sunt voluptate reiciendis iure, ipsa rerum laborum quam quae quia eum ducimus odio odit cupiditate cum provident quidem neque qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, inventore! Odit adipisci tenetur quisquam maiores rerum nostrum quod nihil soluta aliquid enim, omnis sed, obcaecati repudiandae. Error explicabo provident laborum!"
        },
        {
          thumbnail: require("@/assets/singer-1.jpg"),
          url: "url",
          title: "Walao - Song 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid quam tempora aperiam dolor, dicta ex magni voluptatibus, molestiae assumenda doloribus commodi, quos vitae laudantium earum explicabo laborum accusamus fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint beatae facilis labore doloremque voluptatibus, repellat molestiae dolorum inventore blanditiis necessitatibus alias. Laborum sequi dolore reprehenderit, magni nesciunt quo aspernatur a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id sunt voluptate reiciendis iure, ipsa rerum laborum quam quae quia eum ducimus odio odit cupiditate cum provident quidem neque qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, inventore! Odit adipisci tenetur quisquam maiores rerum nostrum quod nihil soluta aliquid enim, omnis sed, obcaecati repudiandae. Error explicabo provident laborum!"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.video {
  &__card {
    padding: 3rem;
    border-radius: 1rem;
    background-color: $color-grey-light-2;

    display: flex;
    align-items: center;

    &-picture {
      img {
        max-height: 20rem;
        margin-right: 3rem;
        border-radius: 1rem;
      }
    }

    &-content {
      &--title {
        font-family: $font-title;
        font-size: 2rem;
        color: $color-primary;
        margin-bottom: 3rem;
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
