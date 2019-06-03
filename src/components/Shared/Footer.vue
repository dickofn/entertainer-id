<template>
  <footer class="footer">
    <div class="footer__title">Footer</div>
    <div class="footer__detail">
      <div class="footer__detail--kiri">Warner Bross Inc cabang Roxy Square
        <br>Sebelah Disney Land
        <br>lorem@ipsum.dolor
      </div>
      <div class="footer__detail--kanan">Warner Bross Inc &copy;</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 2rem 3rem;
  background-color: $color-accent;
  font-family: $font-title;
  color: $color-primary;

  &__title {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    font-weight: 700;
  }

  &__detail {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &--kiri {
      line-height: 1;
    }
  }
}
</style>

