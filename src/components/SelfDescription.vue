<template>
  <div class="self-description" v-if="selfDescription">
    <h4 class="self-description__title block-title mb-2">自我描述</h4>
    <p class="self-description__description">
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
  .self-description {
    background-color: #fff;
    padding: 1rem 2rem;
  }
  .self-description__description {
    margin-bottom: .5rem;
  }
</style>
