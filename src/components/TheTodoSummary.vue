<template>
  <div class="bg-purple text-white rounded shadow my-3 p-3">
    <h6>Todos:</h6>
    <small :class="{ 'text-success': completed, 'font-weight-bold': completed }">
      {{ finishedTodosCount }}/{{ todosCount }}
      <transition name="fade">
        <span v-show="completed">&#10003;</span>
      </transition>
    </small>
  </div>
</template>

<script>
export default {
  props: {
    todosCount: {
      type: Number,
      required: true
    },
    finishedTodosCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    completed: function () {
      return this.todosCount === this.finishedTodosCount &&
        this.todosCount
    }
  }
}
</script>

<style scoped>
.bg-purple {
  background-color: purple;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
