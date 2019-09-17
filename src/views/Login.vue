<template>
  <div>

 
      <h1 id="brand">KIN</h1>

      <div id="returning-user-form" v-if="!newUser">
        <app-login-form :getUser="getUser"></app-login-form>
        <p>new?</p>
        <button @click="toggleNewUser">create an account</button>
      </div>
      
      <div id="create-user-form" v-else>
        <app-create-user-form></app-create-user-form>
        <button @click="toggleNewUser">Back to login</button>
      </div>
    

  </div>
</template>



<script>
  import LoginForm from "../components/forms/LoginForm.vue"
  import CreateUserForm from "../components/forms/CreateUserForm.vue"

  export default {
    data() {
      return { 
        newUser: false
      }
    },
    props: ["getUser"],
    methods: {
      toggleNewUser() {
        this.newUser = !this.newUser;
      }
    },
    components: {
      "app-login-form": LoginForm,
      "app-create-user-form": CreateUserForm
    }
  }
</script>



<style scoped >
  h1 {
    font-family: "Amatic SC", sans-serif;
    font-size: 4rem;
    display: inline-block;
    margin-top: 10%;
    margin-bottom: 0rem;
    /* margin-left: 41% */
    /* PP margin left back to below */
    margin-left: 38.25%;
    /* color: white; */
  }
  p {
    font-family: "Rokkitt", serif;
    font-size: 1.25rem;
    margin-bottom: -.4rem;
  }
  button {
    /* margin-top: 2rem; */
    height: 1.75rem;
    /* background-color: none; */
    border-radius: .2rem;
    padding-top: .15rem;
    border: none;
    font-family: "Rokkitt", serif;
    font-size: 1.5rem;
    cursor: pointer;
    padding-left: 0;
    margin-top: 0;
    outline: none;
  }
  #returning-user-form {
    margin: auto;
    margin-top: 1rem;
    width: max-content;
    align-content: center;
  }
  #create-user-form {
    margin-left: 43.25%;
    margin-top: 1rem;
    width: max-content;
    align-content: center;
  }
  #background {
    /* background-image: url("../assets/kinPhoto.png"); */
    /* background-color: darkolivegreen; */
    position: fixed;
    height: 100vh;
    width: 42.75%;
    z-index: -1;
    margin-top: -.5rem;
    margin-left: -.5rem;
  } 
</style>
