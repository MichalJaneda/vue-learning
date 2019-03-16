<template>
  <ul v-if="todos.length">
    <li v-for="todo in todos">
      {{ todo.text }}
      <small>{{ todo.created_at.toLocaleString() }}</small>
    </li>
  </ul>
  <h4 v-else>No Todos</h4>
</template>

<script>
export default {
  data: function () {
    return {
      todos: [
        {
          text: 'Todo',
          created_at: new Date()
        }
      ]
    }
  }
}
</script>
