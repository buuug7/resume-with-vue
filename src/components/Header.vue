<template>
  <div class="header" v-if="basicInfo">
    <div class="header__top">
      <img :src="avatar" class="header__avatar" alt="" />
    </div>
    <div class="header__down">
      <ul class="header__personal-info">
        <li>{{ basicInfo.name }}</li>
        <li>{{ basicInfo.sex }}</li>
        <li>{{ basicInfo.education }}</li>
        <li>{{ basicInfo.location }}</li>
        <li>{{ basicInfo.born }}</li>
        <li>{{ basicInfo.workExperience }}</li>
        <li>{{ basicInfo.status }}</li>
      </ul>
      <ul class="header__contact">
        <li><i class="fa fa-envelope"></i> {{ basicInfo.contact.email }}</li>
        <li><i class="fa fa-phone"></i> {{ basicInfo.contact.phone }}</li>
      </ul>
      <ul class="header__social-links">
        <li
          v-for="socialAccount in basicInfo.socialAccounts"
          :key="socialAccount.name"
        >
          <a :href="socialAccount.url" target="_blank"
            ><i :class="'fa fa-' + socialAccount.name"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import avatar from '../assets/avatar.jpg';
export default {
  name: 'ResumeHeader',
  props: ['basicInfo'],
  components: {
    //
  },
  data() {
    return {
      avatar: avatar
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .header__top {
    background: url('./../assets/resum-header-bg.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
    height: 9rem;
    padding: 1rem;
    text-align: center;
  }
  .header__avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    bottom: -60px;
    transform: translate(-50%, 0);
    border: 3px solid darken(#fff, 2%);
  }
  .header__down {
    padding: 4rem 1rem 1rem 1rem;
  }

  .header__personal-info {
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

  @media (max-width: 768px) {
    .header__personal-info {
      flex-direction: column;
      li {
        margin-bottom: 5px;
      }
    }
  }
  .header__contact {
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
  .header__social-links {
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
