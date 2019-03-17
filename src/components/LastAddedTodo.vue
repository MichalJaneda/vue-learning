<template>
  <p>Last added TODO: {{ todo.text }}</p>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
