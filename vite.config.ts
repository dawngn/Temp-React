import react from '@vitejs/plugin-react'
import million from 'million/compiler'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [million.vite({ auto: true }), react()],
	base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
