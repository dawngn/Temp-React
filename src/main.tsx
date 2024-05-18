import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import RootProvider from './features/Providers/index.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootProvider>
			<App />
		</RootProvider>
	</React.StrictMode>
)
