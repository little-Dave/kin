<template>
  <div id="photo-container">
    
    <!-- {{photos}} -->
    <ul v-for="photo in photos">
      <app-photo-tile :photo="photo" @gotImage="getImageFromTile"></app-photo-tile>
    </ul>
    

  </div>
</template>



<script>
  import PhotoTile from "./PhotoTile.vue"

  export default {
    props: ["photos", "getImageFromTile"],
    components: {
      "app-photo-tile": PhotoTile
    }
  }
</script>



<style scoped>
  #photo-container {
    border-bottom: 1px solid black;
    height: 80vh;
    width: 38.5%;
    margin-left: 2.5rem;
    float: right;
    margin-right: 2.5rem;

    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    padding-left: 0rem;
    justify-content: space-between;
    align-content: flex-start;
  }
  ul {
    display: inline-block;
    list-style-type: none;
    padding-inline-start: .0rem;
    /* PP margin-top to 0 */
    margin-top: -.3rem;
  }
</style>