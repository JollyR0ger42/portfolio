<template>
<div class="app">
  <div class="app__wrapper">
    <div class="app__container">
      <div class="app__container__left">
        yo
      </div>
      <div class="app__container__right">
        toto
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import summary from '~/assets/summary.json'
</script>

<style lang="scss">
.app {
  background-color: #044463;
  min-height: 100vh;

  &__wrapper {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  &__container {
    color: #fff;
    background-color: var(--dark-blue);
    box-shadow: 0px 0px 10px #000;
    width: 700px;
    height: 990px;
  }
}
</style>
