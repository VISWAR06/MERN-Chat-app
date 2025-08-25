import axios from 'axios'

export const axioinstance = axios.create({
    baseURL:"http://localhost:5000/api/"
})