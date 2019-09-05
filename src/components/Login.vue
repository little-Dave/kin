<template>
  <div>
    <h1>This is the login page</h1>
    <!-- <form>
      <label>Username</label><br>
      <input type="text" /><br>
      <label>Password</label><br>
      <input type="password" />
    </form> -->
    <br>
    <form v-if="!submitted">
      <label>First Name</label><br>
      <input 
              type="text"
              v-model="user.firstName"/>
      <br>
      <label>Last Name</label><br>
      <input 
              type="text" 
              v-model="user.lastName"/>
      <br>
      <label>Username</label><br>
      <input 
              type="text" 
              v-model="user.username"/>
      <br>
      <label>Password</label><br>
      <input 
              type="password" 
              v-model="user.password"/>
      <br>
      <button @click.prevent="submit">submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        user: {
          firstName: "",
          lastName: "",
          username: "",
          password: ""
        },
        submitted: false
      }
    },
    methods: {
      submit() {
        let userInfo = {
          user: {
            first_name: this.user.firstName,
            last_name: this.user.lastName,
            username: this.user.username,
            password: this.user.password  
          }
        }
        fetch("http://localhost:3000/users/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(userInfo)
        }).then(resp => resp.json()).then(resp => console.log(resp))
        this.submitted = !this.submitted
      }
    }
  }
</script>

<style scoped >
  h1 {
    font-family: sans-serif;
    text-align: center;
    color: lightgray;
  }
</style>
