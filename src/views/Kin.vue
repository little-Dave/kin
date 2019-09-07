<template>
  <div>

    <h1>This is the Kin page</h1>
    <app-people-container :userInfo="userInfo"></app-people-container>

  </div>
</template>

<script>
  import PeopleContainer from "../components/PeopleContainer.vue"

  export default {
   props: ["userInfo"],
   components: {
     "app-people-container": PeopleContainer
   }
  }
</script>

<style scoped>
  h1 {
    font-family: sans-serif;
    text-align: center;
    color: lightgray;
  }
  .person {
    height: 5rem;
    width: 5rem;
    border: 1px solid gray;
    margin: 1rem;
    padding: .5rem;
    border-radius: .5rem;
  }
</style>