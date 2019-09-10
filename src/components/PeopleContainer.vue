<template>
  <div id="page">

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
  #page {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    padding-left: .25rem;
    /* border: 1px solid black; */
  }
  ul {
    display: inline-block;
    margin-left: 0;
  }

</style>