<template>
  <div class="app">
    <div class="app__left">
      <!-- NAME -->
      <h1 class="app__name">
        {{summary.name}}
      </h1>
      <!-- POSITION -->
      <h3 class="app__position">
        {{summary.position}}
      </h3>
      <!-- ABOUT -->
      <div class="app__about column">
        <h3 class="app__subtitle">About</h3>
        <p>{{summary.about}}</p>
      </div>
      <!-- CONTACTS -->
      <div class="app__contacts column">
        <h3 class="app__subtitle">Contacts</h3>
        <div class="app__contacts__phone">
          <img
            src="~/assets/call.svg"
            class="app__contacts__icon"
          >
          <a
            class="app__contacts__phone__number"
            :href="'tel:' + summary.contacts.phone"
          >{{summary.contacts.phone}}</a>
        </div>
        <div class="app__contacts__email">
          <img
            src="~/assets/mail.svg"
            class="app__contacts__icon"
          >
          <a
            class="app__contacts__phone__number"
            :href="'mailto:' + summary.contacts.mail"
          >{{summary.contacts.mail}}</a>
        </div>
      </div>
      <!-- SKILLS -->
      <div class="app__skills column">
        <h3 class="app__subtitle">Skills</h3>
        <p
          v-for="(skill, idx) in summary.skills"
          :key="idx"
        >
          {{skill}}
        </p>
      </div>
      <!-- LANGUAGES -->
      <div class="app__languages column">
        <h3 class="app__subtitle">Languages</h3>
        <p
          v-for="(language, idx) in summary.languages"
          :key="idx"
        >
          {{language}}
        </p>
      </div>
      <!-- LINKS -->
      <div class="app__links column">
        <h3 class="app__subtitle">Links</h3>
        <BlockLinks :links="summary.links" />
      </div>
    </div>
    <div class="app__right">
      <!-- EDUCATIONS -->
      <div class="app__educations column">
        <h3 class="app__subtitle2">Educations</h3>
        <BlockEducation
          v-for="(education, idx) in summary.educations"
          :key="idx"
          class="app__education"
          :education="education"
        />
      </div>
      <!-- EXPERIENCE -->
      <div class="app__experience">
        <h3 class="app__subtitle2">Experience</h3>
        <BlockExperience
          v-for="(experience, idx) in summary.experience"
          :key="idx"
          class="app__experience__block"
          :experience="experience"
        />
      </div>
      <!-- PETS -->
      <div class="app__pets">
        <h3 class="app__subtitle2">Pet projects</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import summary from "~/assets/summary.json";
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
}

.app {
  display: flex;
  font-size: 16px;
  box-shadow: 0px 0px 10px #000;
  width: 700px;

  &__name {
    margin-bottom: 0px !important;
  }

  &__educations {
    margin-bottom: 20px;
  }

  &__contacts {
    &__icon {
      width: 28px;
      height: 28px;
      background-color: #fff;
      border-radius: 14px;
      padding: 3px;
      margin-right: 5px;
    }

    &__phone {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      &__number {
        color: #fff;
      }
    }

    &__email {
      display: flex;
      align-items: center;
    }
  }

  &__subtitle {
    color: #000;
    border: 2px solid var(--yellow);
    background-color: var(--yellow);
    display: inline-block;
    text-align: center;
    align-self: center;
    padding: 5px 10px;
    border-radius: 20px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  &__subtitle2 {
    background-color: var(--orange);
    padding: 5px;
    margin-bottom: 5px;
    text-transform: uppercase;
    text-align: center;
  }

  &__left {
    width: 33%;
    background-color: var(--dark-blue);
    color: #fff;
    padding: 10px;

    & > * {
      margin-bottom: 15px;
    }
  }

  &__right {
    width: 67%;
    background-color: var(--light-blue);
    color: #000;
  }

  &__right,
  &__left {
    display: flex;
    flex-direction: column;
  }
}
</style>
