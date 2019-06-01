<template>
  <div class="resume-skills" v-if="skills">
    <h4 class="resume-skills__title text-center mb-3">技能</h4>
    <ul class="resume-skills__skills list-unstyled">
      <li
        class="resume-skills__item-skill mb-3"
        v-for="skill in skills"
        :key="skill.name"
      >
        <div class="resume-skills__item-skill-name text-secondary">{{ skill.name }}</div>
        <div class="progress progress--skill">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            :style="{ width: skill.level + '%' }"
          >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ResumeSkills',
    props: ['skills'],
    components: {
      //
    }
  }
</script>

<style lang="scss" scoped>
  .resume-skills {
    background-color: #fff;
    padding: 1rem 2rem;
    overflow-x: auto;
  }

  .progress--skill {
    height: 1px;
    overflow: initial;

    .progress-bar {
      position: relative;

      &:after {
        content: "\f111";
        position: absolute;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 10px;
        text-rendering: auto;
        display: inline-block;
        color: #007bff;
        right: 0;
      }
    }

    .resume-skills__item-skill {

    }
  }

  .resume-skills__item-skill-name {
    font-size: 14px;

  }
</style>
