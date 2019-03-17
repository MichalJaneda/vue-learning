<template>
  <div>
    <p>Todos: {{ finishedTodosCount }}/{{ todos.length}}</p>
    <TodoAdder @addTodo="todos.push($event)"></TodoAdder>
    <p v-if="todos.length">Last added TODO: {{ lastAdded.text }}</p>
    <ol v-if="todos.length">
      <TodoItem
        v-for="todo in todos"
        :text="todo.text"
        :key="todo.id"
        @finish="finishedTodosCount++">
      </TodoItem>
    </ol>
    <h4 v-else>No Todos</h4>
  </div>
</template>

<script>
import { last } from 'lodash'
import TodoItem from './TodoItem'
import TodoAdder from './TodoAdder'

export default {
  components: {
    TodoItem,
    TodoAdder
  },
  data: function () {
    return {
      todos: [],
      finishedTodosCount: 0
    }
  },
  computed: {
    lastAdded: function () {
      return last(this.todos)
    }
  }
}
</script>
