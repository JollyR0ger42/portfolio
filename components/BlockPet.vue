<template>
  <div class="block-pet">
    <div class="block-pet__left">
      <p class="block-pet__tech">{{pet.tech}}</p>
      <p class="block-pet__title">{{pet.title}}</p>
      <p>{{pet.role}}</p>
    </div>
    <div class="block-pet__right">
      <p class="block-pet__descr">{{pet.description}}</p>
      <nuxt-link
        :href="pet.link"
        class="block-pet__link"
        target="_blank"
        ssr="false"
      >
        <img
          src="~/assets/web.svg"
          class="block-pet__link__icon"
        >
        <span>open in new tab</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps({ pet: Object });
</script>

<style lang="scss" scoped>
.block-pet {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  margin-bottom: 10px;

  &__link {
    display: inline-flex;
    justify-content: center;
    background-color: #fff;
    padding: 2px 4px;
    border-radius: 15px;
    text-decoration: none;
    color: #000;
    font-size: 12px;
    align-items: center;

    &__icon {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  &__descr {
    margin-bottom: 5px;
  }

  &__tech {
    font-size: 10px;
    text-align: center;
    background-color: var(--dark-blue);
    color: #fff;
    margin-left: -5px;
    padding: 3px;
    border-radius: 0 8px 8px 0;
  }

  &__title {
    font-weight: bold;
  }

  &__left {
    width: 32%;
    padding-left: 5px;
  }

  &__right {
    width: 66%;
  }
}
</style>
