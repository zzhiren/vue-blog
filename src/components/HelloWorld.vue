<template lang="pug">
  div.login
    input.username(v-model="username")
    input.password(v-model="password")
    button.login-btn(v-on:click="login()") login
    span {{username}}
    span {{password}}
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios.post("/login",{
        username: this.username,
        password: this.password
      }).then((response) =>{
      
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  width: 200px;
  height: 100px;
  .username {
    width: 200px;
    height: 20px;
    border: 1px solid black;
  }
  .password {
    margin-top: 10px;
    width: 200px;
    height: 20px;
    border: 1px solid black;
  }
  .login-btn {
    margin-top: 10px;
    width: 50px;
    height: 20px;
  }
}
</style>
