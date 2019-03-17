<template>
  <h6 class="border-bottom border-gray">Last added TODO: {{ todo.text }}</h6>
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
