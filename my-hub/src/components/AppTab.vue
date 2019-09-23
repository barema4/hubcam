<template>
  <div class="tab-item">
    <img :src="icon">
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
  name: 'AppTab',
  props: ['name', 'icon', 'pageName']
}
</script>

<style scoped>
.tab-item {
  cursor: pointer;
}
.tab-item img {
  width: 40px;
  height: 40px;
}
.tab-item h3 {
  text-transform: uppercase;
  font-size: 0.5rem;
  padding-top: 10px;
  font-weight: bolder !important;
}
@media only screen and (max-width: 600px) {
    .tab-item h3  {
        display: none;
    }
    .tab-item img {
        width: 20px;
        height: 20px;
    }
}
@media only screen and (max-width: 1024px) {
    .tab-item h3{
        font-size: 8px;
    }
}
</style>
