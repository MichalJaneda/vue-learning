<template>
  <p>
    Todos:&nbsp;
    <span :class="{ completed }">
      {{ finishedTodosCount }}/{{ todosCount }}
    </span>
    <transition name="fade">
      <span v-show="completed">&#10003;</span>
    </transition>
  </p>
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
.completed {
  color: greenyellow;
  font-weight: 900;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
