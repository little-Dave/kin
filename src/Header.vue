<template>
  <ul>
    <li><router-link to="/login">Login</router-link></li>
    <li><router-link to="/kin">Kin</router-link></li>
  </ul>
</template>

<script>
export default {
  
}
</script>
 
<style scoped>
  ul {
    list-style-type: none;
    margin: auto;
    
  }

  li {
    display: inline-block;
    margin: 1rem;
  }
</style>