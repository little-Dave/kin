<template>
  <div>

    <h1>This is the login page</h1>

    <div v-if="!newUser">
      <app-login-form></app-login-form>
      <button @click="toggleNewUser">Create account</button>
    </div>
    <div v-else>
      <app-create-user-form></app-create-user-form>
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
    font-family: sans-serif;
    text-align: center;
    color: lightgray;
  }
</style>
