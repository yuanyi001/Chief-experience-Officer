<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    
    <router-view/>
  </div>
</template>

<script>

import Table from './components/table'
export default {
  components:{
    Table
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
