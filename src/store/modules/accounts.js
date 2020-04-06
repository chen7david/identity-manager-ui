import http from './../../plugins/http'

export default {
    state: {
        account: {},
        authInfo: {},
        hasToken: localStorage.getItem('access-token') !== null
    },
    getters: {
        account: (state) => state.account,
        authInfo: (state) => state.authInfo,
        isAuth: (state) => state.hasToken,
    },
    mutations: {
        SET_AUTH: (state, hasToken) => state.hasToken = hasToken
    },
    actions: {
        async createAccount({commit}, accountInfo){
            const account = await http.post('/users', accountInfo)
            commit('SET_VALIDATION', null)
            console.log(account)
        },

        async login({commit}, authInfo){
            const { accessToken, refreshToken, user } = await http.post('/login', authInfo)
            localStorage.setItem('access-token', accessToken)
            localStorage.setItem('refresh-token', refreshToken)
            localStorage.setItem('user', JSON.stringify(user))
            commit('SET_AUTH', true)
            commit('SET_VALIDATION', null)
        },
    },
}