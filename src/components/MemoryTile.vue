<template>
  <div id="memory-tile">
      
  <p class="memory-text">{{memory.description}}</p>

  </div>
</template>



<script>
  export default {
    props: ["memory"]
  }
</script>



<style scoped>
  .memory-text {
    /* border: 1px solid black; */
    font-family: "Rokkitt", sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    margin-right: auto;
    margin-top: 0rem;
    display: block;
  }
</style>