<template>
  <div class="resume-self-description" v-if="selfDescription">
    <h4 class="resume-self-description__title text-center mb-3">自我描述</h4>
    <p class="resume-self-description__description">
      {{ selfDescription.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ResumeSelfDescription',
  props: ['selfDescription'],
  components: {
    //
  }
}
</script>

<style lang="scss" scoped>
  .resume-self-description {
    background-color: #fff;
    padding: 1rem 2rem;
  }
  .resume-self-description__description {
    //margin:0;
  }
</style>
