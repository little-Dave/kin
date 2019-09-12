<template>

  <div @click="selectPhoto" id="photo-tile" :name="photo.id" :style="{backgroundImage: 'url(' + photo.file_name + ')' }"></div>

</template>



<script>
  export default {
    props: ["photo"],
    methods: {
      selectPhoto() {
        this.$emit("gotImage", event.target.attributes.name.value)
      }
    }
  }
</script>



<style scoped>
  #photo-tile {
    /* border: 1px solid black; */
    height: 8rem;
    width: 8rem;
    background-size: cover;
    background-position: 50% 50%;
    cursor: pointer;
  }
</style>