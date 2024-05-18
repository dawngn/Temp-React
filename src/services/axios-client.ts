import axios from 'axios'

export const axiosClient = axios.create({
	baseURL: '/api',
})

axiosClient.interceptors.request.use((config) => {
	const token = localStorage.getItem('token')
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`
	}
	return config
})
