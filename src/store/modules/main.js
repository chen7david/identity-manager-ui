
export default {
  state: {
    error: null,
    validation: null
  },
  getters: {
    validate: (state) => (key) => {
      return state.validation ? state.validation.messages.filter(el => el.key == key) : {}
    }
  },
  mutations: {
    SET_VALIDATION: (state, details) => state.validation = details,
  },
  actions: {
    setValidation: ({commit}, details) => commit('SET_VALIDATION', details)
  },
}