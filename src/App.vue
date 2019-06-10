<template>
  <div id="app">
    <!-- Changing key means all the item in vue router will be reloaded -->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
// This empty all selector allowing scss in another page to be scoped
* {
}
</style>


