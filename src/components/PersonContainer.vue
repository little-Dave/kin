<template>
  <div id="container">
  <!-- {{personToShow}} -->
  
    <div id="lg-photo" :style="{backgroundImage: 'url(' + personToShow.tile_image + ')'}"></div>
    <app-photo-tile-container :photos="personToShow.photos"></app-photo-tile-container>
    <h2>{{personToShow.first_name}}</h2>
    <app-memory-tile-container></app-memory-tile-container>


  </div>
</template>



<script>
  import PhotoTileContainer from "./PhotoTileContainer.vue"
  import MemoryTileContainer from "./MemoryTileContainer.vue"

  export default {
    props: ["personToShow"],
    components: {
      "app-photo-tile-container": PhotoTileContainer,
      "app-memory-tile-container": MemoryTileContainer
    }
  }
</script>



<style scoped>
  h2 {
    font-family: "Rokkitt", sans-serif;
    float: left;
    margin-top: .5%;
    margin-left: 1%;
    font-size: 2rem;
    margin-left: 2.5rem;
    border-bottom: 1px solid black;
    width: 50%;
    display: inline-flex;
  }
  #container {
    /* border: 1px solid black; */
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    min-height: 80vh;
  }
  #lg-photo {
    background-size: cover;
    width: 50%;
    height: 45vh;
    /* border: 1px solid blue;     */
    margin-left: 2.5rem;
    float: left;
  }
</style>