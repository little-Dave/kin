<template>
  <div>
  <!-- <ul>
    <li><router-link to="/">Login</router-link></li>
    <li><router-link to="/kin">Kin</router-link></li>
  </ul> -->
    <h1>KIN</h1>
    <router-link to="/">
      <span 
            id="sign-out-icon" 
            class="fas fa-sign-out-alt fa-lg">
      </span>
    </router-link>
  </div>
</template>



<script>
  export default {
 
  }
</script>
 

 
<style scoped>
  h1 {
    font-family: "Amatic SC", sans-serif;
    font-size: 2.5rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin-left: .25rem;
    display: inline-block;
  }
  #sign-out-icon {
    display: inline-block;
    float: right;
    margin-top: 1.2rem;
    cursor: pointer;
  }
  a {
    color: black;
  }
</style>