<template>
  <div class="main">
    <div class="header">
      <div class="container">
        <h1 class="container_header">remote | ok</h1>
        <button class="container_btn">Post a Job</button>
      </div>
      <div class="form-row">
        <form action class="search_form">
          <input type="text" class="search_input" />
        </form>
      </div>
    </div>
    <div class="tabs">
      <SwitcherTab />
      <Card />
    </div>
    <div class="today">
        <h1>Today</h1>
    </div>
    <div class="tabs">
      <!-- <job-panel title="Go Software Engineer" label="Hunter" days="6d" location="EU only" :image="image" /> -->
      <job-panel
      v-for="job in jobs"
      :key="job.label"
      :label="job.label"
      :image="job.image"
      :title="job.title"
      :location="job.location"
      :days="job.days"
      />
    </div>
  </div>
</template>
<script>
import SwitcherTab from '../components/SwitcherTab'
import Card from '../components/Card'
import JobPanel from './JobPanel'
import image from '../assets/carrot-solid.svg'
export default {
  components: {
    SwitcherTab,
    Card,
    JobPanel
  },
  data () {
    return {

      jobs: [
        {
          label: 'Hunter',
          image: image,
          title: 'Go Software Engineer',
          location: 'EU only',
          days: '6d'
        },
        {
          label: 'logos',
          image: image,
          title: 'Go Software Engineer',
          location: 'EU only',
          days: '3d'
        },
        {
          label: 'Andela',
          image: image,
          title: 'Go Software Engineer',
          location: 'EU only',
          days: '2d'
        },
        {
          label: 'Hawel',
          image: image,
          title: 'Go Software Engineer',
          location: 'EU only',
          days: '1d'
        }
      ]

    }
  }
}
</script>
<style scoped>
.header {
  background-image: url(../assets/bann.jpg);
}
.container {
  display: flex;
  justify-content: space-between;
}
.container_header {
  margin: 0 auto;
  color: white;
  font-family: cursive;
  padding-left: 135px;
}
.container_btn {
  margin-right: 20px;
  border-radius: 2px;
  width: 100px;
  border: none;
  height: 36px;
  margin-top: 29px;
  margin-bottom: 26px;
  background-color: red;
  color: white;
  font-size: 12px;
}
.form-row {
  margin-right: 400px;
  padding-bottom: 62px;
  padding-top: 54px;
  margin: 0 auto;
}
.form-row input[type="text"] {
  background-color: #ffffff;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  padding: 7px;
  font-size: 14px;
  width: 210px;
}
.tabs {
  width: 70%;
  margin: 19px 165px;
}
.today{
   width: 28%;
}
@media only screen and (max-width: 600px) {
    .main{
        position: relative;
    }
    .tabs {
        width: 100%;
        margin: 0px;

    }
    .container_header{
    margin: 0px;
    padding-left: 16px;
    margin-top: 19px;
    }
}
@media screen and (min-device-width: 760px) and (max-device-width: 1366px) {

    .tabs{
        width: 100%;
        margin: 0px;
    }
    .today{
        width: 0px;
    }
}

</style>
