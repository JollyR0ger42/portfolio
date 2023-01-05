<template>
  <div class="app__wrapper">
    <div class="app__container">
      {{summary}}
    </div>
  </div>
</template>

<script setup>
import summary from '~/assets/summary.json'
</script>

<style lang="scss">
.app {
  &__wrapper {
    background-color: #044463;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__container {
    color: #fff;
    max-width: 800px;
    background-color: var(--dark-blue);
    flex: 1;
    box-shadow: 0px 0px 10px #000;
  }
}
</style>
