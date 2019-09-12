<template>
  <div id="container">
    
    <ul v-for="person in userInfo.people">
      <app-person-tile :person="person" @showPerson="getPersonToShow"></app-person-tile>
    </ul>
    
  </div>
</template>



<script>
  import PersonTile from "./PersonTile.vue"

  export default {
    props: ["userInfo", "getPersonToShow"],
    components: {
      "app-person-tile": PersonTile
    },
  }
</script>



<style scoped>
  #container {
    width: 75%;
    margin-left: auto;
    /* PP change right margin back to auto */
    margin-right: 14rem;
    padding-left: .25rem;
    /* border: 1px solid black; */
  }
  ul {
    display: inline-block;
    margin-left: 0;
  }
</style>