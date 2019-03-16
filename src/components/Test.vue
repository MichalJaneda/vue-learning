<template>
  <div>
    <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
    <p v-if="seen">Now you see me</p>
    <button @click="seen = !seen">Toggle</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      message: 'Hover ' + new Date().toLocaleString(),
      seen: true
    }
  }
}
</script>
