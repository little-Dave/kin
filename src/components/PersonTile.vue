<template>
  <div>

    <h3>{{person.first_name}}</h3>
    <container id="outer-container">
      <container id="photo-container" :style="{backgroundImage: 'url(' + person.tile_image + ')'}"></container>
    </container>
    
  </div>
</template>



<script>
  export default {
    props: ["person"]
  }
</script>



<style scoped>
  #photo-container {
   height:200px;
   width: 300px;
   /* border: 1px solid black; */
   margin-top: 2%;
   float: left;
   /* background-color: gray; */
   /* background-size: cover; */
  }
  #outer-container {
   height:230px;
   width: 300px;
   border-bottom: 1px solid black;
   /* border: 1px solid black; */
   margin-bottom: 1rem;
   display: inline-block;
   flex-wrap: wrap;
   /* z-index: 25; */
  }
  h3 {
    font-family: "Rokkitt", sans-serif;
    margin-bottom: 0;
    font-size: 1.25rem;
    margin-top: 0;
  }
</style>