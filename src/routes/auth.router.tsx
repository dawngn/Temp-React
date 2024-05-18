import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'

import ErrorPage from '@/pages/error.page'

export const AuthRouter = createBrowserRouter(
	createRoutesFromChildren(
		<Route path='/' Component={Outlet} ErrorBoundary={ErrorPage}>
			{/* <Route index element={<Navigate to={'/auth/login'} replace={true} />} />
	
			</Route> */}

			<Route path={'*'} element={<Navigate to={'/auth/login'} replace={true} />} />
		</Route>
	)
)
