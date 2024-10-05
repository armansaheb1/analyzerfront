import { createStore } from 'vuex'

export default createStore({
  state: {
    isAdmin : false
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      }
      else {
        state.token = ''
        state.isAuthenticated = false
      }
      if(localStorage.getItem('AdminToken')){
        state.AdminToken = localStorage.getItem('AdminToken')
        state.isAdmin = true
      }
      else {
        state.Admintoken = ''
        state.isAdmin = false
      }
      if (window.innerWidth > 600) {
        state.collapse = false
      } else {
        state.collapse = true
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    setAdminToken(state, token) {
      state.AdminToken = token
      state.isAdmin = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
    removeAdminToken(state) {
      state.AdminToken = ''
      state.isAdmin = false
    },
  },
  actions: {
  },
  modules: {
  }
})
