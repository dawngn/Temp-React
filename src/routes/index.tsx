/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, Suspense, useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import Preloader from '@/components/shared/preloader'
import { useAuthStore } from '@/store/auth.store'

import { AppRouter } from './app.router'
import { AuthRouter } from './auth.router'

export default function Router() {
	const [isReady, setIsReady] = useState(false)
	const user = useAuthStore((state: { user: any }) => state.user)

	const checkAuth = useAuthStore((state: { auth: any }) => state.auth)

	useEffect(() => {
		Promise.allSettled([checkAuth()]).finally(() => {
			setIsReady(true)
		})
	}, [checkAuth])

	const getRouter = () => {
		if (!user) return AuthRouter
		return AppRouter
	}

	if (!isReady) return <Preloader />
	return (
		<Suspense fallback={<Fragment />}>
			<RouterProvider router={getRouter()} />
		</Suspense>
	)
}
