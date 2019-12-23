import editUserComponent from './editUser'

const editUser = {
  install: function (Vue) {
    Vue.components('editUser', editUserComponent)
  }
}
export default editUser
