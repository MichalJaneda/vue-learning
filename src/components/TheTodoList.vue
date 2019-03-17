<template>
  <b-container fluid>
    <the-todo-summary
      :todos-count="todos.length"
      :finished-todos-count="finishedTodosCount">
    </the-todo-summary>

    <the-todo-adder @todo-added="todos.push($event)"></the-todo-adder>

    <div class="bg-white rounded p-3 my-3">
      <last-added-todo
        v-if="todos.length"
        :todo="lastAdded">
      </last-added-todo>

      <ul
        class="list-group list-group-flush"
        v-if="todos.length">
        <todo-item
          v-for="todo in todos"
          :text="todo.text"
          :key="todo.id"
          @finish="finishedTodosCount++">
        </todo-item>
      </ul>

      <h6
        v-else
        class="border-bottom border-gray">
        No Todos
      </h6>
    </div>
  </b-container>
</template>

<script>
import { last } from 'lodash'
import TodoItem from './TodoItem'
import TheTodoAdder from './TheTodoAdder'
import TheTodoSummary from './TheTodoSummary'
import LastAddedTodo from './LastAddedTodo'

export default {
  components: {
    TodoItem,
    TheTodoAdder,
    TheTodoSummary,
    LastAddedTodo
  },
  data () {
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
