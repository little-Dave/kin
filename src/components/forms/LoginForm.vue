<template>
  <div>

    <form>

          <label>Username</label><br>
          <input type="text"
                 v-model="user.username" /><br>

          <label>Password</label><br>
          <input type="password"
                 v-model="user.password"/><br>

          <button @click.prevent="logIn">
            <router-link to="/kin">Log in</router-link>
          </button>

    </form>

  </div>
</template>



<script>
  import axios from "axios"

  export default {
    data() {
      return {
        user: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      logIn() {
        axios.get("http://localhost:3000/users/".concat(this.user.username))
          .then(resp => console.log("response", resp))
      }
    }
  }
</script>



<style scoped>

</style>