
export default {
  state: {
    errors: null,
    snackbar: {},
    navbar: {}
  },
  getters: {
    errors: (state) => state.errors,
    validate: (state) => (key) => {
      let error =  state.errors ? state.errors.find(el => el.key == key) : null
      return error ? error.message : ''
    },
    snackbar: (state) => state.snackbar,
    navbar: (state) => state.navbar 
  },
  mutations: {
    SET_ERRORS: (state, errors) => state.errors = errors,
    RESET_ERRORS: (state) => state.errors = [],
    SET_SNACKBAR: (state, detail) => state.snackbar = {
      show: true,
      text: detail.message,
      color: detail.state || 'dark'
    },
  },
  actions: {
    getValidationErrors: ({commit}, errors) => {
        commit('SET_ERRORS', errors)
    },

    setSnackbar: ({commit}, message) => {
        commit('SET_SNACKBAR', message)
        commit('RESET_ERRORS')
    }
  },
}