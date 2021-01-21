<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted () {
    console.log('this.$fetchData', this.$fetchData)
  }
}
</script>

<style>
  @import "./assets/css/main.css";
  @import './assets/scss/transition.scss';
  @import "./assets/css/cimo.css";
</style>
