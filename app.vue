<template>
<div class="app">
  <div class="app__wrapper">
    <div class="app__container">
      <div class="app__container__left">
        <h1 class="app__container__name">
          {{summary.name}}
        </h1>
        <h3 class="app__container__name">
          {{summary.position}}
        </h3>
        <div class="app__container__about">
          <h4>About</h4>
          <p>{{summary.about}}</p>
        </div>
        <div class="app__container__contacts">
          <h4>Contacts</h4>
          <div>
            <span>Phone:</span>
            <span>{{summary.contacts.phone}}</span>
          </div>
          <div>
            <span>Email:</span>
            <span>{{summary.contacts.mail}}</span>
          </div>
        </div>
        <div class="app__container__skills">
          <h4>Skills</h4>
          <p
            v-for="(skill, idx) in summary.skills"
            :key="idx"
          >
            {{skill}}
          </p>
        </div>
        <div class="app__container__languages">
          <h4>Languages:</h4>
          <p
            v-for="(language, idx) in summary.languages"
            :key="idx"
          >
            {{language}}
          </p>
        </div>
        <div class="app__container__links">
          <h4>Links</h4>
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
        <div class="app__container__educations">
          <h4>Educations</h4>
          <div
            v-for="(education, idx) in summary.educations"
            :key="idx"
            class="app__container__education"
          >
            <div>
              <span>institution:</span>
              <span>{{education.institution}}</span>
            </div>
            <div>
              <span>degree:</span>
              <span>{{education.degree}}</span>
            </div>
            <div>
              <span>years:</span>
              <span>{{education.years}}</span>
            </div>
            <div>
              <span>department:</span>
              <span>{{education.department}}</span>
            </div>
          </div>
        </div>
        <div class="app__container__expirience__wrapper">
          <h4>Expirience</h4>
          <div
            v-for="(experience, idx) in summary.experience"
            :key="idx"
            class="app__container__expirience"
          >
            <div>
              <span>company:</span>
              <span>{{experience.company}}</span>
            </div>
            <div>
              <span>role:</span>
              <span>{{experience.role}}</span>
            </div>
            <div>
              <span>time:</span>
              <span>{{experience.time}}</span>
            </div>
            <div>
              <span>decription:</span>
              <span>{{experience.decription}}</span>
            </div>
            <div>
              <span>techstack:</span>
              <span>{{experience.techstack}}</span>
            </div>
          </div>
        </div>
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
    box-shadow: 0px 0px 10px #000;
    width: 700px;
    height: 990px;
    display: flex;



    &__left {
      width: 33%;
      background-color: var(--dark-blue);
      color: #fff;
    }

    &__right {
      width: 67%;
      background-color: var(--light-blue);
      color: #000;
    }

    &__right, &__left {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
  }
}
</style>
