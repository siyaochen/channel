import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createMessage = (payload) => api.post('/message', payload)
export const getMessages = () => api.get('/messages')

const apis = {
    createMessage,
    getMessages,
}

export default apis
