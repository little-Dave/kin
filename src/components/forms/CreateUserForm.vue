<template>
  <div>

    <form> 

          <!-- <label>First name</label><br> -->
          <input 
                type="text"
                class="form-width"
                placeholder="First name"
                v-model="user.firstName" 
                /><br><br>

          <!-- <label>Last name</label><br> -->
          <input 
                type="text"
                class="form-width"
                placeholder="Last name"
                v-model="user.lastName" 
                /><br><br>

          <!-- <label>Username</label><br> -->
          <input 
                type="text"
                class="form-width"
                placeholder="Username"
                v-model="user.username" 
                /><br><br>
          
          <!-- <label>Phone number</label><br> -->
          <input 
                type="tel"
                placeholder="#"
                size="3"
                maxlength="3"
                v-model="user.phoneAreaCode" 
                /><span> - </span>
          <input 
                type="tel"
                placeholder=""
                size="3"
                maxlength="3"
                v-model="user.phoneFirstThree" 
                /><span> - </span>
          <input 
                type="tel"
                placeholder=""
                size="4"
                maxlength="4"
                v-model="user.phoneLastFour" 
                /><br><br>

          <!-- <label>Password</label><br> -->
          <input 
                type="password"
                class="form-width"
                placeholder="Password"
                v-model="user.password" 
                /><br><br>

          <button @click.prevent="createUser">Create account</button>

    </form>
  
    <p>*you'll be redirected to the login page <br>&#160;upon creating your account</p>

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
          phoneAreaCode: "",
          phoneFirstThree: "",
          phoneLastFour: "",
          password: ""
        },
        phone: ""
      }
    },
    methods: {
      createUser() {
        let newUser = {
          user: {
            first_name: this.user.firstName,
            last_name: this.user.lastName,
            username: this.user.username,
            phone_number: this.user.phoneAreaCode.concat(this.user.phoneFirstThree).concat(this.user.phoneLastFour),
            password: this.user.password
          }
        }
        axios.post("http://localhost:3000/users/", newUser)
          .then(location.reload())
        // console.log(newUser)
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
    font-family: "Rokkitt", sans-serif;
    font-size: 1.25rem;
    color: black;
    cursor: pointer;
  }
  input {
    font-family: "Rokkitt", sans-serif;
    font-weight: 300;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    font-size: 2rem;
  }
  .form-width {
    width: 12rem;
  }
  p {
    margin-top: .5rem;
    font-family: "Rokkitt", sans-serif;
  }
</style>