<template>
  <div>

    <form>

          <!-- <label>Username</label><br> -->
          <input type="text"
                 placeholder="Username"
                 v-model="user.username" /><br><br>

          <!-- <label>Password</label><br> -->
          <input type="password"
                 @keyup.enter.prevent="logIn"
                 placeholder="Password"
                 v-model="user.password"/><br><br>
          <!-- change this so you can't travel to kin page without valid response -->
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
    props: ["getUser"],
    methods: {
      logIn() {
        axios.get("http://localhost:3000/users/".concat(this.user.username))
          .then(resp => this.getUser(resp))
          // .then(resp => console.log(resp))
      }
    }
  }
</script>



<style scoped>
  button {
    height: 1.75rem;
    background-color: white;
    border-radius: .2rem;
    padding-top: .15rem;
    border: 1px solid black;
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    text-emphasis: none;
    font-family: "Rokkitt", sans-serif;
    /* font-weight: 300; */
    font-size: 1.25rem;
    color: black;
  }
  input {
    font-family: "Rokkitt", sans-serif;
    font-weight: 300;
    width: 12rem;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    font-size: 2rem;
  }
</style>