<template>
  <div>

    <app-header></app-header>
    
    <router-view/>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"

  export default {
    data() {
      return {
        currentUser: 
      }
    },
    components: {
      "app-header": Header
    }
  }
</script>

<style>

</style>
