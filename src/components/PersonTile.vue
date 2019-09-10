<template>
  <div>
    
    <h2>{{ person.first_name }} {{ person.last_name }}</h2>
    <img :src="person.tile_image" />

  </div>
</template>



<script>
  export default {
    props: ["person"]
  }
</script>



<style scoped>
  h2 {
    font-family: sans-serif;
  }
</style>