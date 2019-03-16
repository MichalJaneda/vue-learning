<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="next_todo">
      <button>Add TODO</button>
    </form>
    <p v-if="todos.length">Last added TODO: {{ lastAdded }}</p>
    <ol v-if="todos.length">
      <TodoItem
        v-for="todo in todos"
        :text="todo"
        :key="todo">
      </TodoItem>
    </ol>
    <h4 v-else>No Todos</h4>
  </div>
</template>

<script>
import { last } from 'lodash'
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem
  },
  data: function () {
    return {
      todos: [
        'TODO'
      ],
      next_todo: ''
    }
  },
  computed: {
    lastAdded: function () {
      return last(this.todos)
    }
  },
  methods: {
    addTodo: function () {
      if (this.next_todo) {
        this.todos.push(this.next_todo)
        this.next_todo = ''
      }
    }
  }
}
</script>
