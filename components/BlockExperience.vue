<template>
  <div class="block-exp">
    <div class="block-exp__left">
      <p class="block-exp__time">{{experience.time}}</p>
      <p class="block-exp__company">{{experience.company}}</p>
      <p>{{experience.role}}</p>
    </div>
    <div class="block-exp__right">
      <p class="block-exp__descr">{{experience.description}}</p>
      <div>
        <span
          v-for="(tech, idx) in experience.techstack"
          :key="idx"
          class="block-exp__tech"
        >
          {{tech}}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({experience: Object})
</script>

<style lang="scss" scoped>
.block-exp {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  margin-bottom: 10px;

  &__descr {
    margin-bottom: 5px;
  }

  &__tech {
    background-color: var(--blue);
    padding: 3px;
    border-radius: 5px;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  &__time {
    font-size: 10px;
    text-align: center;
    background-color: var(--dark-blue);
    color: #fff;
    margin-left: -5px;
    padding: 3px;
    border-radius: 0 8px 8px 0;
  }

  &__company {
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
