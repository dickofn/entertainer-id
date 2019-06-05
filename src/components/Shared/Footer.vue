<template>
  <footer class="footer">
    <div class="footer__line"></div>
    <div class="footer__content">
      <div class="footer__title">Footer</div>
      <div class="footer__detail">
        <div class="footer__detail--kiri">
          Warner Bross Inc cabang Roxy Square
          <br>Sebelah Disney Land
          <br>lorem@ipsum.dolor
        </div>
        <div class="footer__detail--kanan">Warner Bross Inc &copy;</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__line {
    height: 2px;
    background-image: linear-gradient(
      to right,
      rgba(#000, 0.05),
      rgba(#000, 0.2),
      rgba(#000, 0.05)
    );
  }

  &__content {
    padding: 2rem 3rem;
    font-family: $font-title;
    color: $color-primary;

    .footer {
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
  }
}
</style>

