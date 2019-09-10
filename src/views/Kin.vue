<template>
  <div>

    <app-header class="nav"></app-header>
    <app-people-container :userInfo="userInfo"></app-people-container>

  </div>
</template>

<script>
  import PeopleContainer from "../components/PeopleContainer.vue"
  import Header from "../components/Header.vue"

  export default {
   props: ["userInfo"],
   components: {
     "app-people-container": PeopleContainer,
     "app-header": Header
   }
  }
</script>

<style scoped>
  /* h1 {
    font-family: sans-serif;
    text-align: center;
    color: lightgray;
  } */
  .person {
    height: 5rem;
    width: 5rem;
    border: 1px solid gray;
    margin: 1rem;
    padding: .5rem;
    border-radius: .5rem;
  }
  .nav {
    margin-top: -1rem;
    padding-top: 1rem;
    width: 66%;
    /* background-color: antiquewhite; */
    margin-left: auto;
    margin-right: auto;
    border-bottom: .5px solid black;
  }
</style>