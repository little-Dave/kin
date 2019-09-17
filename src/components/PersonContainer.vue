<template>
  <div id="container">
  <!-- {{personToShow}} -->
  
    <div id="lg-photo" :style="{backgroundImage: 'url(' + largeImage + ')'}"></div>
    <app-photo-tile-container :photos="personToShow.photos" :getImageFromTile="setLargeImage"></app-photo-tile-container>
    <h2>{{personToShow.first_name}}</h2>
    <app-memory-tile-container :memories="personToShow.memories"></app-memory-tile-container>
    
    <p id="add-details">
      <span id="add-memory">+</span>
      <span id="add-photo">+</span>
    </p>

  </div>
</template>



<script>
  import PhotoTileContainer from "./PhotoTileContainer.vue"
  import MemoryTileContainer from "./MemoryTileContainer.vue"

  export default {
    data() {
      return {
        largeImage: this.personToShow.tile_image
      }
    },
    props: ["personToShow"],
    components: {
      "app-photo-tile-container": PhotoTileContainer,
      "app-memory-tile-container": MemoryTileContainer
    },
    methods: {
      setLargeImage(selectedImage) {
        let photoId = selectedImage
        let photo = this.personToShow.photos.find(function(photo) {
          return photo.id == photoId
        }).file_name
        this.largeImage = photo
        // console.log(this.personToShow.photos)
      }
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
    width: 74%;
    margin-left: auto;
    margin-right: auto;
    min-height: 80vh;
  }
  #lg-photo {
    background-size: cover;
    background-position: 50% 50%;
    width: 50%;
    height: 45vh;
    margin-left: 2.5rem;
    float: left;
  }
  #add-details {
    font-family: "Rokkitt", sans-serif;
    font-size: 2rem;
    font-weight: 200;
    bottom: 0;
    position: absolute;
    margin-bottom: .75rem;
    margin-left: 37.75%;
  }
  #add-memory {
    cursor: pointer;
  }
  #add-photo {
    margin-left: 27rem;
    cursor: pointer;
  }
</style>