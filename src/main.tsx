import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from '@/routes/index.tsx'

import RootProvider from './features/Providers/index.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootProvider>
			<Router />
		</RootProvider>
	</React.StrictMode>
)
