/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError() as any

	return (
		<div className='flex items-center justify-center'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error?.statusText || error?.message}</i>
			</p>
		</div>
	)
}

ErrorPage.withLayout = function withLayout(Layout: React.ComponentType<PropsWithChildren>) {
	return function ErrorPageWithLayout() {
		return (
			<Layout>
				<ErrorPage />
			</Layout>
		)
	}
}
