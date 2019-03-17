<template>
  <div id="app">
    <h4>{{ new Date().toLocaleString() }}</h4>
    <the-todo-list></the-todo-list>
  </div>
</template>

<script>
import TheTodoList from './components/TheTodoList'

export default {
  name: 'app',
  components: {
    TheTodoList
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
