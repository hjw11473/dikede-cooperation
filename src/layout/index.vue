<template>
  <div>
    <Navbar />
    <sidebar class="sidebar-container" />
    <AppMain></AppMain>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
export default {
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>

</style>
