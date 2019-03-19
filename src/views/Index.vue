<template>
  <b-jumbotron
    :header='header'
    :lead='lead'>
  </b-jumbotron>
</template>

<script>
export default {
  data: function () {
    return {
      header: 'Welcome to another TODO app',
      lead: 'Definitely nothing interesting in here'
    }
  }
}
</script>
