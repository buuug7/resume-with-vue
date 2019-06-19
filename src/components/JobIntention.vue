<template>
  <div class="resume-job-intention" v-if="jobIntention">
    <h4 class="resume-job-intention__title text-center mb-3">求职意向</h4>
    <ul class="resume-job-intention__content">
      <li>{{ jobIntention.position }}</li>
      <li>{{ jobIntention.location }}</li>
      <li>{{ jobIntention.salary }}</li>
      <li>{{ jobIntention.jobTime }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeJobIntention',
  props: ['jobIntention'],
  components: {
    //
  }
}
</script>

<style lang="scss" >
  .resume-job-intention {
    background-color: #fff;
    padding: 1rem 2rem;
  }
  .resume-job-intention__content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    padding-left: 0;
    >li{
      padding:5px 10px;
    }
  }
</style>
