<template>
  <h1>Bienvenidos a VUE.JS 3</h1>
  <div>
    <button @click="increment">Count is: {{ count }}</button>
  </div>

  <div class="tabla">
    <table>

      <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Last Name
        </th>
        <th>
          User Age
        </th>
      </tr>
      </thead>

      <tbody>
      <tr
          v-for="user in usuarios"
          :key="user.id"
      >
        <td>{{ user.userName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.userAge }}</td>
      </tr>
      </tbody>

    </table>
  </div>


</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from "axios";

let usuarios = [
  {
    id: 0,
    userName: 'PEPE',
    lastName: 'LUI',
    userAge: 31
  },
  // {
  //   id: 1,
  //   userName: 'Eleonor',
  //   lastName: 'Rigby',
  //   userAge: 25
  // },
  // {
  //   id: 2,
  //   userName: 'My',
  //   lastName: 'Michelle',
  //   userAge: 47
  // },

];

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
  axios.get('https://6238c7400a54d2ceab7a0c3e.mockapi.io/UsuariosDesafioVue3').then((response) => {
    console.log(' SOY LA RESPONSE DATA ' + JSON.stringify(response.data))
    usuarios = (response.data)
    console.log('SOY USUARIOS' + JSON.stringify(usuarios))
  })
})

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  if (count.value >= 10) {
    alert('llegaste a 10 Campeon');
    count.value = 0;
  }
  count.value++
}

</script>

<style>

button {
  padding: 20px;
  background: #6DC570;
  font-size: 20px;
}

.tabla {
  padding: 10px;
  box-shadow: #6DC570 8px 8px 0 2px;
  margin: 10px;
  border: 1px solid black;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>

