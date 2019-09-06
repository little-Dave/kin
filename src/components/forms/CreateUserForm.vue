<template>
  <div>

    <form>

          <label>First name</label><br>
          <input 
                type="text"
                v-model="user.firstName" 
                /><br>

          <label>Last name</label><br>
          <input 
                type="text"
                v-model="user.lastName" 
                /><br>

          <label>Username</label><br>
          <input 
                type="text"
                v-model="user.username" 
                /><br>

          <label>Password</label><br>
          <input 
                type="password"
                v-model="user.password" 
                /><br>

          <button @click.prevent="createUser">Create account</button>

    </form>
    
    <p>you'll be redirected to the login page upon creating your account</p>

  </div>
</template>



<script>
  import axios from "axios"

  export default {
    data() {
      return {
        user: {
          firstName: "",
          lastName: "",
          username: "",
          password: ""
        }
      }
    }, 
    methods: {
      createUser() {
        let newUser = {
          user: {
            first_name: this.user.firstName,
            last_name: this.user.lastName,
            username: this.user.username,
            password: this.user.password
          }
        }
        axios.post("http://localhost:3000/users/", newUser)
          .then(location.reload())
      }
    }
  }
</script>



<style scoped>

</style>