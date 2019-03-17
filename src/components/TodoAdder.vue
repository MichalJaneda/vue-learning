<template>
  <form @submit.prevent="addTodo">
    <input v-model="next_todo">
    <button>Add TODO</button>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      next_todo: '',
      id: 1
    }
  },
  methods: {
    addTodo: function () {
      if (this.next_todo) {
        this.$emit('addTodo', { text: this.next_todo, id: this.id++ })
        this.next_todo = ''
      }
    }
  }
}
</script>
