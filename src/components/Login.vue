<template>
  <div>
    <h1>This is the login page</h1>
    <form id="create-user-form">
      <label for="first-name">First name</label><br>
      <input 
        type="text" 
        id="first-name"
        v-model="firstName"
        />
    </form>
    <p>{{ firstName }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: ""
      }
    }
  }
</script>

<style scoped >
  input {
    color: black;
  }
  h1 {
    font-family: sans-serif;
    text-align: center;
    color: lightgray;
  }
  form {
    margin: auto;
    text-align: center;
  }
  label {
    align-self: left;
  }
</style>
