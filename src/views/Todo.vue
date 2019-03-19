<template>
  <b-jumbotron
    :header='header'
    lead='Make it prettier after store'>
  </b-jumbotron>
</template>

<script>
export default {
  data: function () {
    return {
      header: `Todo: ${this.$route.params.id}`
    }
  },
  created: function () {
    setTimeout(() => {
      document.title = `Todo: ${this.$route.params.id}`
    }, 1000)
  }
}
</script>
