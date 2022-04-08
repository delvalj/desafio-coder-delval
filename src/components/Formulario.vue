<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: userNameValidity === 'invalid'}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" @blur="validateInput"/>
      <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
    </div>
    <div class="form-control" :class="{invalid: userNameValidity === 'invalid'}">
      <label for="last-name">Last Name</label>
      <input id="last-name" name="last-name" type="text" v-model.trim="lastName" @blur="validateInput"/>
      <p v-if="userNameValidity === 'invalid'">Please enter a valid Last name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userAge" ref="ageInput"/>
    </div>
    <div>
      <button @click="postUsuarios"> Save Data</button>
    </div>
  </form>
</template>

<script>

import {ref} from "vue";

export default {
  components: {},
  data() {
    let userName = ref('');
    let userAge = ref(null);
    let lastName = ref('');
    let userNameValidity = ref('pending');

    return {
      userName,
      userAge,
      lastName,
      userNameValidity
    };
  },

  methods: {
    submitForm() {
      console.log('Username: ' + this.userName);
      this.userName = '';

      console.log('User LastName: ');
      console.log(this.lastName)
      this.lastName = '';

      console.log('User age:');
      console.log(this.userAge);
      this.userAge = null;

      alert('Usuario Guardado!')
    },
    // getList() {
    //   this.axios.get('https://6238c7400a54d2ceab7a0c3e.mockapi.io/UsuariosDesafioVue3').then((response) => {
    //     console.log(response.data)
    //   })
    // },

    postUsuarios() {
      this.axios.post('https://6238c7400a54d2ceab7a0c3e.mockapi.io/UsuariosDesafioVue3', {
        userName: this.userName,
        lastName: this.lastName,
        userAge: this.userAge
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    validateInput() {
      if (this.userName === '' && this.lastName === '') {
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
    }
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
