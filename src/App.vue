<template>
  <main id="app">
    <b-container>
      <b-row>
        <b-col>
          <the-navbar></the-navbar>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  name: 'app',
  components: {
    TheNavbar
  }
}
</script>
