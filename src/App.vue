<template>
  <div>
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from "./Header"

  export default {
    components: {
      Header
    }
  }
</script>

<style>

</style>
