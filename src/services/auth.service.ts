/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from './axios-client'

type LoginData = ApiResponse<{
	expire: number
	token: string
}>

export async function login(form: any) {
	const response = await axiosClient.post<LoginData>(`/auth/login`, form)
	return response.data.data
}

type RegisterData = ApiResponse<{
	expire: number
	token: string
}>

export async function register(form: any) {
	const response = await axiosClient.post<RegisterData>(`/auth/register`, form)
	return response.data.data
}

export async function checkEmail(form: { email: string }) {
	const response = await axiosClient.post<ApiResponse<{ result: boolean }>>(`/auth/check-email`, form)
	return response.data.data
}

export async function identify() {
	const response = await axiosClient.get<ApiResponse<any>>(`/auth/identify`)
	return response.data.data
}
