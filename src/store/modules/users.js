
export default {
    state: {
      user: null,
    },
    getters: {
      snackbar: (state) => state.snackbar ? state.snackbar : {},
    },
    mutations: {
      SET_USER: (state, user) => state.validation = user,
    },
    actions: {
    },
  }