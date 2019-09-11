<template>
  <div>
    <!-- {{personToShow}} -->
    <app-header class="nav"></app-header>

    <app-people-container v-if="!personToShow.first_name" :userInfo="userInfo" :getPersonToShow="setPersonToShow"></app-people-container>
    <app-person-container v-else :personToShow="personToShow"></app-person-container>

  </div>
</template>

<script>
  import PersonContainer from "../components/PersonContainer.vue"
  import PeopleContainer from "../components/PeopleContainer.vue"
  import Header from "../components/Header.vue"

  export default {
    data() {
      return {
        personToShow: {}
      }
    },
    props: ["userInfo"],
    methods: {
      // setPersonToShow passed to PeopleContainer, where it's passed to PersonTile as a custom event
      setPersonToShow(resp) {
        this.personToShow = resp.data
      }
    },
    components: {
      "app-person-container": PersonContainer,
      "app-people-container": PeopleContainer,
      "app-header": Header
    }
  }
</script>

<style scoped>
  .nav {
    margin-top: -1rem;
    padding-top: 1rem;
    width: 70%;
    position: sticky;
    top: 0;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5rem;;
    border-bottom: .5px solid black;
    z-index: 50;
  }
</style>