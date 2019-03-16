<template>
  <div id="app">
    <h4>{{ new Date().toLocaleString() }}</h4>
    <Test></Test>
    <Todos></Todos>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import Todos from './components/Todos'

export default {
  name: 'app',
  components: {
    Test,
    Todos
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
