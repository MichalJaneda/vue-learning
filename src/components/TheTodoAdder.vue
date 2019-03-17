<template>
  <div class="bg-white rounded p-3 my-3">
    <b-form @submit.prevent="addTodo">
      <label
        class="sr-only"
        for="next_todo">Next todo</label>
      <b-input
        id="next_todo"
        placeholder="Next todo"
        autocomplete="off"
        v-model="next_todo">
      </b-input>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      next_todo: '',
      id: 1
    }
  },
  methods: {
    addTodo: function () {
      if (this.next_todo) {
        this.$emit('todo-added', { text: this.next_todo, id: this.id++ })
        this.next_todo = ''
      }
    }
  }
}
</script>
