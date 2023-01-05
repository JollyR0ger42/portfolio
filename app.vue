<template>
  <div class="app__wrapper">
    <div class="app__container">
      Yo
    </div>
  </div>
</template>

<style lang="scss">
.app {
  &__wrapper {
    background-color: var(--dark-blue);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__container {
    max-width: 800px;
    background-color: var(--light-blue);
    flex: 1;
  }
}
</style>
