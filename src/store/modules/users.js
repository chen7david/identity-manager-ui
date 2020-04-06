
export default {
    state: {
      user: JSON.parse(localStorage.getItem('user')),
    },
    getters: {
      user: (state) => state.user ? state.user : {},
    },
    mutations: {
      SET_USER: (state, user) => state.user = user,
    },
    actions: {
    },
  }