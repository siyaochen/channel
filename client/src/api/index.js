import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

const createMessage = (payload) => api.post('/message', payload)
const getMessages = () => api.get('/messages')

export { createMessage, getMessages }
