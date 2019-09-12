<template>
  <div id="memory-tile-container">

    <ul v-for="memory in memories">
      <app-memory-tile :memory="memory"></app-memory-tile>
    </ul>

  </div>
</template>



<script>
  import MemoryTile from "./MemoryTile.vue"

  export default {
    props: ["memories"],
    components: {
      "app-memory-tile": MemoryTile
    }
  }
</script>



<style scoped>
  #memory-tile-container {
    border: 1px solid #F7F1EA;
    border-bottom: 1px solid black;
    width: 49.75%;
    margin-left: 2.5rem;
    height: 25.3vh;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    float: left;
    /* PP change top margin and height */
    margin-top: .5rem;
    margin-bottom: 12rem;
    background-color: #FFF9F2;
    padding-top: 1rem;
    /* cursor: move; */
  }
  ul {
    padding-left: 0;
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>