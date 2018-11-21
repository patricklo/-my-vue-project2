<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p style = "font-size:25px;">计数器: {{ appcounter }}</p>
    <button @click = "appcounter++" style = "font-size:25px;">点我</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      appcounter: 1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
