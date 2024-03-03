import axios from 'axios'
const api  = axios.create({
    baseURL:`http://192.168.1.10:7184/api`,
})
export default api

export const userApi = (token: string) => axios.create({
    baseURL:`http://192.168.1.10:7184/api`,
    headers:{
        Authorization:`Bearer ${token}`
    }})
