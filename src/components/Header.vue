<template>
  <div>
    
    <p @click="goBack" v-if="backArrow" id="back-arrow" class="fas fa-angle-left fa-lg"></p>
    <h1>KIN</h1>

    <ul>
      <li id="add"><strong>+</strong> someone</li>
      <li id="profile">profile</li>
      <router-link to="/">
        <li id="sign-out">sign out</li>
      </router-link>
    </ul>

  </div>
</template>



<script>
  export default {
    props: ["backArrow"],
    methods: {
      goBack() {
        this.$emit("goBack")
      }
    }
  }
</script>
 

 
<style scoped>
  h1 {
    font-family: "Amatic SC", sans-serif;
    font-size: 2.75rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin-left: .25rem;
    display: inline-block;
  }
  #sign-out {
    margin-left: 1.5rem;
  }
  #add {
    margin-right: 1.5rem;
    cursor: pointer;
  }
  ul {
    float: right;
    margin-top: 2rem;
    margin-right: .25rem;
    list-style: none;
  }
  li {
    font-family: "Rokkitt", sans-serif;
    font-size: 1.25rem;
    display: inline-block;
  }
  a {
    color: black;
  }
  #back-arrow {
    margin-left: -1.1rem;
    display: inline-block;
    float: left;
    margin-top: 1.3rem;
    cursor: pointer;
  }
  #profile {
    cursor: pointer;
  }
</style>