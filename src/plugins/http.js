const axios = require('axios')
// import store from '../store'

const http = axios.create({
    baseURL: 'http://192.168.50.124:4000',
    timeout:6000,
})

http.interceptors.request.use(config => {
    config.url = encodeURI(config.url)
    let accessToken = localStorage.getItem('access-token')
    if(accessToken != null) config.headers.Authorization = `Bearer ${accessToken}`;
    return config

}, error =>{
    console.log({'req-error': error})
    return Promise.reject(error)
})

http.interceptors.response.use(response => {
    const {isCargo, payload, details} = response.data
    if(isCargo) {
        console.log(response.data)
        response.data = payload
        console.log(details)
    }
    return response
}, error =>{

    const data = error.response && error.response.data    
    const {isCargo, details} = data
    if(isCargo) {
        console.log(details)
    }
    return Promise.reject(error)
})

export default http