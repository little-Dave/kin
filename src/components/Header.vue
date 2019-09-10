<template>
  <div>
    
    <h1>KIN</h1>
    
    <ul>
      <li>profile</li>
      <router-link to="/">
        <li id="sign-out">sign out</li>
      </router-link>
    </ul>

  </div>
</template>



<script>
  export default {
 
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
</style>