<template>
  <div>

    <ul v-for="person in userInfo.people">
      <app-person-tile :person="person"></app-person-tile>
    </ul>

  </div>
</template>



<script>
  import PersonTile from "./PersonTile.vue"

  export default {
    props: ["userInfo"],
    components: {
      "app-person-tile": PersonTile
    }
  }
</script>



<style scoped>

</style>