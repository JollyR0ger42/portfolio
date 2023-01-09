<template>
  <div class="block-education">
    <div class="block-education__left">
      <p class="block-education__time">{{education.years}}</p>
      <p class="block-education__institution">{{education.institution}}</p>
    </div>
    <div class="block-education__right">
      <p>{{education.department}}</p>
      <p>{{education.degree}}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ education: Object });
</script>

<style lang="scss" scoped>
.block-education {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  &__institution {
    font-weight: bold;
    padding-left: 5px;
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

  &__left {
    width: 32%;
  }

  &__right {
    width: 66%;
  }
}
</style>
