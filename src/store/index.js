// import {createStore} from 'vuex'
// import axios from "axios";
//
// export default createStore({
//     state: {
//         usuarios: [],
//     },
//     mutations: {
//         setUsuarios(state, payload) {
//             state.usuarios = payload
//             console.log('set users' + JSON.stringify(this.usuarios))
//         },
//     },
//     actions: {
//         async getUsuarios({commit}) {
//             try {
//                 await axios.get("https://6238c7400a54d2ceab7a0c3e.mockapi.io/UsuariosDesafioVue3").then((result) => {
//                     this.usuarios = (result.data)
//                     console.log("productos array " + JSON.stringify(this.usuarios))
//                     commit('setUsuarios', result.data)
//                 })
//             } catch (error) {
//                 console.error(error)
//             }
//         },
//         modules: {}
//     }
// })
