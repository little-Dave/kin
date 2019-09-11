<template>

  <div id="photo-tile" :style="{backgroundImage: 'url(' + photo.file_name + ')' }"></div>

</template>



<script>
  export default {
    props: ["photo"]
  }
</script>



<style scoped>
  #photo-tile {
    /* border: 1px solid black; */
    height: 6.9rem;
    width: 6.9rem;
    background-size: cover;
  }
</style>