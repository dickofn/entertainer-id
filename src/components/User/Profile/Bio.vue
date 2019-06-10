<template>
  <div class="bio">
    <div class="bio__content">{{ bio }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid quam tempora aperiam dolor, dicta ex magni voluptatibus, molestiae assumenda doloribus commodi, quos vitae laudantium earum explicabo laborum accusamus fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint beatae facilis labore doloremque voluptatibus, repellat molestiae dolorum inventore blanditiis necessitatibus alias. Laborum sequi dolore reprehenderit, magni nesciunt quo aspernatur a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id sunt voluptate reiciendis iure, ipsa rerum laborum quam quae quia eum ducimus odio odit cupiditate cum provident quidem neque qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, inventore! Odit adipisci tenetur quisquam maiores rerum nostrum quod nihil soluta aliquid enim, omnis sed, obcaecati repudiandae. Error explicabo provident laborum!"
    };
  }
};
</script>

<style lang="scss" scoped>
.bio {
  padding: 3rem;
  border-right: 1px solid $color-grey-light-2;
  border-left: 1px solid $color-grey-light-2;
}
</style>
