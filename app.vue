<template>
<div class="app">
  <div class="app__wrapper">
    <div class="app__container">
      <div class="app__container__left">
        <!-- NAME -->
        <h1 class="app__container__name">
          {{summary.name}}
        </h1>
        <!-- POSITION -->
        <h3 class="app__container__position">
          {{summary.position}}
        </h3>
        <!-- ABOUT -->
        <div class="app__container__about column">
          <h3 class="app__subtitle">About</h3>
          <p>{{summary.about}}</p>
        </div>
        <!-- CONTACTS -->
        <div class="app__container__contacts column">
          <h3 class="app__subtitle">Contacts</h3>
          <div>
            <span>Phone:</span>
            <span>{{summary.contacts.phone}}</span>
          </div>
          <div>
            <span>Email:</span>
            <span>{{summary.contacts.mail}}</span>
          </div>
        </div>
        <!-- SKILLS -->
        <div class="app__container__skills column">
          <h3 class="app__subtitle">Skills</h3>
          <p
            v-for="(skill, idx) in summary.skills"
            :key="idx"
          >
            {{skill}}
          </p>
        </div>
        <!-- LANGUAGES -->
        <div class="app__container__languages column">
          <h3 class="app__subtitle">Languages</h3>
          <p
            v-for="(language, idx) in summary.languages"
            :key="idx"
          >
            {{language}}
          </p>
        </div>
        <!-- EDUCATIONS -->
        <div class="app__container__educations column">
          <h3 class="app__subtitle">Educations</h3>
          <div
            v-for="(education, idx) in summary.educations"
            :key="idx"
            class="app__container__education"
          >
            <div>
              <span>School:</span>
              <span>{{education.institution}}</span>
            </div>
            <div>
              <span>Grade:</span>
              <span>{{education.degree}}</span>
            </div>
            <div>
              <span>Calendar:</span>
              <span>{{education.years}}</span>
            </div>
            <div>
              <span>Apartment:</span>
              <span>{{education.department}}</span>
            </div>
          </div>
        </div>
        <!-- LINKS -->
        <div class="app__container__links column">
          <h3 class="app__subtitle">Links</h3>
          <div>
            <span>Github:</span>
            <span>{{summary.links.github}}</span>
          </div>
          <div>
            <span>Linkedin:</span>
            <span>{{summary.links.linkedin}}</span>
          </div>
        </div>
      </div>
      <div class="app__container__right">
        <div class="app__container__experience__wrapper">
          <!-- EXPERIENCE -->
          <h3 class="app__subtitle2">Experience</h3>
          <BlockExperience
            v-for="(experience, idx) in summary.experience"
            :key="idx"
            class="app__container__experience"
            :experience="experience"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import summary from '~/assets/summary.json'
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
}

.app {
  background-color: #044463;
  min-height: 100vh;

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

  &__wrapper {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  &__container {
    box-shadow: 0px 0px 10px #000;
    width: 700px;
    height: 990px;
    display: flex;

    &__links {
      margin-top: auto;
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

    &__right, &__left {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
