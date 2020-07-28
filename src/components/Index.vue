<template>
  <div class="resume">
    <Header :basicInfo="resume.basicInfo" class="mb-2" />
    <SelfDescription :selfDescription="resume.selfDescription" class="mb-2" />
    <Skills :skills="resume.skills" class="mb-2" />
    <JobIntention :jobIntention="resume.jobIntention" class="mb-2" />
    <EducationExperience
      :educationExperiences="resume.educationExperiences"
      class="mb-2"
    />
    <WorkExperience :workExperiences="resume.workExperiences" class="mb-2" />
    <ProjectExperience
      :projectExperiences="resume.projectExperiences"
      class="mb-1"
    />
    <Footer />
  </div>
</template>

<script>
import Header from './Header';
import SelfDescription from './SelfDescription';
import Skills from './Skills';
import JobIntention from './JobIntention';
import WorkExperience from './WorkExperience';
import ProjectExperience from './ProjectExperience';
import EducationExperience from './EducationExperience';
import Footer from './Footer';

import myResume from '../resume.yml';

export default {
  name: 'ResumeIndex',
  data() {
    return {
      resume: {
        basicInfo: null,
        selfDescription: null,
        skills: null,
        jobIntention: null,
        educationExperiences: null,
        workExperiences: null,
        projectExperiences: null
      },
      flag: false
    };
  },
  mounted() {
    this.resume = myResume;
  },
  components: {
    Header,
    SelfDescription,
    Skills,
    JobIntention,
    WorkExperience,
    ProjectExperience,
    EducationExperience,
    Footer
  }
};
</script>

<style scoped lang="scss">
.resume {
  /*max-width: 650px;*/
  /*margin: 4rem auto;*/
}

@media (max-width: 768px) {
  .resume {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
