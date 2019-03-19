<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="primary">
    <b-navbar-brand :to="{ name: 'index' }">Todos</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item
          v-for="route in navigableRoutes"
          :to="{ name: route.name }"
          :key="route.name">
          {{ route.name | capitalize }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    navigableRoutes: function () {
      return this.$router.options.routes.filter((route) => route.meta.inNav)
    }
  }
}
</script>

<style>
.router-link-active {
  color: white;
}
</style>
