import addUserComponent from './addUser.vue'

const addUser = {
  install: function (Vue) {
    Vue.components('addUser', addUserComponent)
  }
}
export default addUser