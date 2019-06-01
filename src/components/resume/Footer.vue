<template>
  <div class="resume-footer bg-light text-muted font-size-14">
    <p>
      Copyright <i class="fa fa-copyright"></i> 2018 <a href="https://github.com/buuug7" target="_blank">Buuug7</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResumeFooter'
}
</script>

<style lang="scss" scoped>
  .resume-footer{
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    font-size: 14px;
    >p {
      margin:0;
    }
  }
</style>
