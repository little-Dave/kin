<template>
  <div>

    <h3>{{person.first_name}}</h3>
    <div id="outer-container">
      <div @click="getPerson" id="photo-container" :name="person.id" :style="{backgroundImage: 'url(' + person.tile_image + ')'}"></div>
    </div>
    
  </div>
</template>



<script>
  import axios from 'axios'

  export default {
    props: ["person", "getPersonToShow"],
    methods: {
      getPerson() {
        let personId = event.target.attributes.name.value;
        axios.get("http://localhost:3000/people/".concat(personId))
          // .then(resp => this.getPersonToShow(resp))
          .then(resp => this.$emit("showPerson", resp))
      }
    }
  }
</script>



<style scoped>
  #photo-container {
   height:200px;
   width: 300px;
   margin-top: 3%;
   float: left;
   background-size: cover;
   cursor: pointer;
  }
  #outer-container {
   height:223px;
   width: 300px;
   border-bottom: 1px solid black;
   margin-bottom: 1rem;
   display: inline-block;
   flex-wrap: wrap;
  }
  h3 {
    font-family: "Rokkitt", sans-serif;
    margin-bottom: 0;
    margin-left: .1rem;
    font-size: 1.25rem;
    margin-top: 0;
  }
</style>