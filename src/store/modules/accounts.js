import http from './../../plugins/http'

export default {
    state: {
        account: {}
    },
    getters: {
        account: (state) => state.account
    },
    mutations: {
        
    },
    actions: {
        async createAccount({commit}, accountInfo){
            const account = await http.post('users', accountInfo)
            commit('SET_VALIDATION', null)
            console.log(account)
        }
    },
}