import { Outlet } from 'react-router-dom'

export default function AppLayout({ children }: { children?: React.ReactNode }) {
	return <>{children || <Outlet />}</>
}
