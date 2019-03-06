<template>
  <div class="resume-work-experience" v-if="workExperiences">
    <h4 class="resume-work-experience__title text-center mb-3">工作经历</h4>
    <ul class="resume-work-experience__time-line list-unstyled">
      <li
        class="resume-work-experience__item"
        v-for="workExperience in workExperiences"
        :key="workExperience.id"
      >
        <div class="resume-work-experience__item-time mb-2 text-secondary small">
          {{ workExperience.time }}
        </div>
        <div class="resume-work-experience__company mb-2">
          <span class="resume-work-experience__company-name">{{ workExperience.companyName }}</span>
          <em class="vline"></em>
          <span class="resume-work-experience__company-work-position text-secondary">{{ workExperience.workPosition }}</span>
        </div>
        <div class="resume-work-experience__work-content-title mb-2">工作内容</div>
        <ul class="resume-work-experience__work-content text-secondary">
          <li v-for="workContent in workExperience.workContents" :key="workContent.id">{{ workContent.text }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeWorkExperience',
  props: ['workExperiences'],
  components: {
    //
  }
}
</script>

<style lang="scss" scoped>
  .resume-work-experience {
    background-color: #fff;
    padding: 1rem 2rem;
  }
  .resume-work-experience__time-line {
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
    .resume-work-experience__item {
      margin-left: -2rem;
      padding: 1rem;
      position: relative;
    }
    .resume-work-experience__item-time {
      border-radius: 5px;
      &:before {
        content: '';
        position: absolute;
        width: 9px;
        height: 9px;
        background: #fff;
        border: 1px #18c3b1 solid;
        border-radius: 100%;
        top: 21px;
        left: -4px;
      }
    }
    .resume-work-experience__company {
      &:before {
        content: ' ';
        position: absolute;
        width: 5px;
        height: 5px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 100%;
        top: 52px;
        left: -2px;
      }
    }
    .resume-work-experience__work-content-title {
      &:before {
        content: ' ';
        position: absolute;
        width: 5px;
        height: 5px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 100%;
        top: 84px;
        left: -2px;
      }
    }

    .resume-work-experience__work-content {

    }
    .resume-work-experience__company-name {
      font-weight: bold;

    }
    .resume-work-experience__company-work-position {

    }
  }
</style>
