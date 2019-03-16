<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="next_todo">
      <button>Add TODO</button>
    </form>
    <p v-if="todos.length">Last added TODO: {{ lastAdded }}</p>
    <ol v-if="todos.length">
      <li
        v-for="todo in todos"
        :key="todo.text">
        <strong>{{ todo.text }}</strong>
        <small>{{ todo.created_at.toLocaleString() }}</small>
      </li>
    </ol>
    <h4 v-else>No Todos</h4>
  </div>
</template>

<script>
import { last } from 'lodash'

export default {
  data: function () {
    return {
      todos: [
        {
          text: 'Todo',
          created_at: new Date()
        }
      ],
      next_todo: ''
    }
  },
  computed: {
    lastAdded: function () {
      return last(this.todos).text
    }
  },
  methods: {
    addTodo: function () {
      if (this.next_todo) {
        this.todos.push({ text: this.next_todo, created_at: new Date() })
        this.next_todo = ''
      }
    }
  }
}
</script>
