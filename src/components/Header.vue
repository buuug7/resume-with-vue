<template>
  <div class="resume-header" v-if="basicInfo">
    <div class="resume-header__top">
      <img :src="basicInfo.avatar" class="resume-header__avatar" alt="">
    </div>
    <div class="resume-header__down">
      <ul class="resume-header__personal-info">
        <li><strong>{{ basicInfo.name }}</strong></li>
        <li>{{ basicInfo.sex }}</li>
        <li>{{ basicInfo.education }}</li>
        <li>{{ basicInfo.location }}</li>
        <li>{{ basicInfo.born }}</li>
        <li>{{ basicInfo.workExperience }}</li>
        <li>{{ basicInfo.status }}</li>
      </ul>
      <ul class="resume-header__contact">
        <li><i class="fa fa-envelope"></i> {{ basicInfo.contact.email }}</li>
        <li><i class="fa fa-phone"></i> {{ basicInfo.contact.phone }}</li>
      </ul>
      <ul class="resume-header__social-links">
        <li
          v-for="socialAccount in basicInfo.socialAccounts"
          :key="socialAccount.name"
        >
          <a :href="socialAccount.url" target="_blank"><i :class=" 'fa fa-'+socialAccount.name"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ResumeHeader',
  props: ['basicInfo'],
  components: {
    //
  }
}
</script>

<style lang="scss" scoped>
  .resume-header {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .resume-header__top {
      background: url("./../assets/resum-header-bg.jpg") no-repeat center center;
      background-size: cover;
      position: relative;
      height: 9rem;
      padding: 1rem;
      text-align: center;
    }
    .resume-header__avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      position: absolute;
      bottom: -60px;
      transform: translate(-50%, 0);
      border:3px solid darken(#fff,2%);
    }
    .resume-header__down {
      padding: 4rem 1rem 1rem 1rem;
    }

    .resume-header__personal-info {
      display: flex;
      flex-direction: row;
      margin: 1rem 0;
      text-align: center;
      justify-content: center;
      list-style: none;
      padding-left: 0;
      li {
        padding: 0 8px;
      }
    }

    @media (max-width: 576px) {
      .resume-header__personal-info {
        flex-direction: column;
        li {
          margin-bottom: 5px;
        }
      }
    }
    .resume-header__contact{
      display: flex;
      flex-direction: row;
      margin: 1rem 0;
      text-align: center;
      justify-content: center;
      list-style: none;
      padding-left: 0;
      li {
        padding: 0 8px;
      }
    }
    .resume-header__social-links {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: center;
      margin-bottom: 0;
      list-style: none;
      padding-left: 0;
      li {
        padding: 8px;
      }
    }
  }
</style>
