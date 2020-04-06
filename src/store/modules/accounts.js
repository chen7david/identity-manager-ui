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
        async createAccount(_, accountInfo){
            const account = await http.post('users', accountInfo)
            console.log(account)
        }
    },
}