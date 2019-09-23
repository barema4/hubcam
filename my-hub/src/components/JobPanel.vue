<template>
  <div class="main">
    <div class="job-image">
      <img :src="image" />
    </div>
    <div class="content">
      <small>{{ label }}</small>
      <p class="title">{{ title }}</p>
      <small>{{ location }}</small>
    </div>
    <div class="btns">
      <LanguageButton language="Go" />
      <LanguageButton language="Kubernetes" />
      <LanguageButton language="Bootstrap" />
      <LanguageButton language="Dev" />
    </div>
    <div class="days">
      <p>{{ days }}</p>
    </div>
  </div>
</template>

<script>
import LanguageButton from './LanguageButton'
export default {
  data () {
    return {

    }
  },
  components: {
    LanguageButton
  },
  props: ['label', 'title', 'location', 'days', 'image']
}
</script>

<style scoped>
.main {
  display: flex;
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
  border-left: none;
  border-right: none;
  align-items: center;
}
.job-image{
    width: 10%;
}
.job-image img {
  width: 40px;
  height: 40px;
}
.content{
    width: 30%;
    text-align: justify;
}
.btns{
    width: 30%;
    margin-right: 20px;
}
.days{
  margin-left: 95px;
}
.title{
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: bold;

}
@media only screen and (max-width: 600px) {
    .job-image{
    width: 20%;
}

}
</style>
