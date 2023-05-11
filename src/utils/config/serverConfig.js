import axios from 'axios'

const baseUrl = process.env.Server_URL || "http://exkenas.ir/api"

const instance = axios.create({
    baseURL:baseUrl
})

export default instance