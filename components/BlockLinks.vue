<template>
  <div class="block-links">
    <div class="block-links__content">
      <a
        :href="links.github"
        target="_blank"
      >
        <img
          class="block-links__icon"
          src="~/assets/github.svg"
          alt="GitHub"
        >
      </a>
      <a
        :href="links.linkedin"
        target="_blank"
      >
        <img
          class="block-links__icon"
          src="~/assets/linkedin.svg"
          alt="Linkedin"
        >
      </a>
      <a
        :href="links.telegram"
        target="_blank"
      >
        <img
          class="block-links__icon"
          src="~/assets/telegram.svg"
          alt="Telegram"
        >
      </a>
    </div>
    <a
      :href="links.download"
      target="_blank"
      download
      class="block-links__download"
    >
      <img
        src="~/assets/download.svg"
        alt="Download"
        class="block-links__download__icon"
      >
      <span>as PDF</span>
    </a>
  </div>
</template>

<script setup>
defineProps({ links: Object });
</script>

<style lang="scss" scoped>
.block-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;

    & > *:not(:last-child) {
      margin-right: 5px;
    }

    margin-bottom: 5px;
  }

  &__icon {
    width: 28px;
    height: 28px;
    background-color: #fff;
    border-radius: 14px;
    padding: 3px;
    margin-right: 5px;
  }

  &__download {
    background-color: #fff;
    padding: 3px 5px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--dark-blue);
    font-size: 10px;

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
