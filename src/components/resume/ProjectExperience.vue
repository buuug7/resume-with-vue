<template>
  <div class="resume-project-experience" v-if="projectExperiences">
    <h4 class="resume-project-experience__title text-center font-size-22 mb-3">项目经验</h4>
    <ul class="resume-project-experience__time-line list-unstyled">
      <li
        class="resume-project-experience__item"
        v-for="projectExperience in projectExperiences"
        :key="projectExperience.id"
      >
        <div class="resume-work-experience__project mb-2">
          <a :href="projectExperience.url" v-if="projectExperience.url !== 'none'" target="_blank" class="resume-work-experience__project-name">
            {{ projectExperience.name }}
          </a>
          <span v-else class="resume-work-experience__project-name">{{ projectExperience.name }}</span>
          <em class="vline"></em>
          <span class="resume-project-experience__project-position text-secondary">
            {{ projectExperience.position }}
          </span>
        </div>
        <p class="resume-project-experience__project-description text-secondary">
          {{ projectExperience.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeProjectExperience',
  props: ['projectExperiences'],
  components: {
    //
  }
}
</script>

<style lang="scss" scoped>
  .resume-project-experience {
    background-color: #fff;
    padding: 1rem 2rem;
  }
  .resume-project-experience__time-line {
    padding-left: 4rem;
    position: relative;
    &:before {
      content: ' ';
      position: absolute;
      width: 1px;
      background-color: rgba(0, 0, 0, 0.1);
      display: block;
      left: 2rem;
      top: 0;
      bottom: 0;
    }
    .resume-project-experience__item {
      margin-left: -2rem;
      padding: 1rem;
      position: relative;
      font-size: 16px;
    }
    .resume-work-experience__project {
      border-radius: 5px;
      &:before {
        content: '';
        position: absolute;
        width: 9px;
        height: 9px;
        background: #fff;
        border: 1px #18c3b1 solid;
        border-radius: 100%;
        top: 22px;
        left: -4px;
      }
    }
    .resume-project-experience__project-description {
      margin-bottom: 0;
      &:before {
        content: ' ';
        position: absolute;
        width: 5px;
        height: 5px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 100%;
        top: 55px;
        left: -2px;
      }
    }
  }
</style>
