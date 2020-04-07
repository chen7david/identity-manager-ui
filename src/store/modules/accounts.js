import http from './../../plugins/http'
import router from './../../router'

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
            const { data } = await http.post('/login', authInfo)
            localStorage.setItem('access-token', data.accessToken)
            localStorage.setItem('refresh-token', data.refreshToken)
            localStorage.setItem('user', JSON.stringify(data.user))
            commit('SET_AUTH', true)
            commit('$SET_USER', data.user)
            commit('SET_VALIDATION', null)
        },

        async logout({commit}){
            localStorage.removeItem('access-token')
            localStorage.removeItem('refresh-token')
            localStorage.removeItem('user')
            commit('SET_AUTH', false)
            commit('SET_USER', null)
            router.push('/')
        }
    },

}