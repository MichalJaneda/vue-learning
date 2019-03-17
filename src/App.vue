<template>
  <main id="app">
    <b-container>
      <b-row>
        <b-col>
          <the-todo-list></the-todo-list>
        </b-col>
      </b-row>
    </b-container>
  </main>
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
