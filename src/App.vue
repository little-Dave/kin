<template>
  <div>

    <router-view :getUser="setUser" :userInfo="currentUser" />
    <!-- {{currentUser}} -->
  </div>
</template>



<script>
  // import Header from "./components/Header.vue"

  export default {
    data() {
      return {
        currentUser: {}
      }
    },
    methods: {
     setUser(resp) {
       this.currentUser = resp.data;
     }
    },
    components: {
      "app-header": Header
    }
  }
</script>



<style>

</style>
