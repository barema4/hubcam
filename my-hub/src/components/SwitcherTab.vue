<template>
  <div class="swicher">
    <AppTab
      v-for="tab in tabs"
      :key="tab.name"
      :name="tab.name"
      :icon="tab.imageUrl"
      :pageName="tab.pageName"
    />
  </div>
</template>
<script>
import AppTab from '../components/AppTab'
import RemoteJobImg from '../assets/carrot-solid.svg'
export default {
  data () {
    return {
      tabs: [
        {
          name: 'REMOTE JOBS',
          imageUrl: RemoteJobImg,
          pageName: 'RemoteJobs'
        },
        {
          name: 'SOFTWARE DEVELOPMENT',
          imageUrl: RemoteJobImg,
          pageName: 'SoftwareDevelopment'
        },
        {
          name: 'CUSTOMER SUPPORT',
          imageUrl: RemoteJobImg,
          pageName: 'CustomerSupport'
        },
        {
          name: 'MARKETING',
          imageUrl: RemoteJobImg,
          pageName: 'Marketing'
        },
        {
          name: 'DESIGN',
          imageUrl: RemoteJobImg,
          pageName: 'Design'
        },
        {
          name: 'NON-TECH',
          imageUrl: RemoteJobImg,
          pageName: 'NonTech'
        },
        {
          name: 'TOP-REMOTE COMPANIES',
          imageUrl: RemoteJobImg,
          pageName: 'companies'
        },
        {
          name: 'REMOTE WORK STATICS',
          imageUrl: RemoteJobImg,
          pageName: 'remote'
        },
        {
          name: 'INCOPARATE REMOTELY',
          imageUrl: RemoteJobImg,
          pageName: 'incoparate'
        },
        {
          name: 'BECOME A DIGIT NOMAD',
          imageUrl: RemoteJobImg,
          pageName: 'digit'
        }
      ]
    }
  },
  components: {
    AppTab
  }
}
</script>
<style scoped>
.swicher {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  grid-auto-rows: 100px;
  margin-top: 30px;
}
</style>
