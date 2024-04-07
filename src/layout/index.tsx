import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="flex align-center h-screen w-screen bg-indigo-950">
      <Outlet />
    </div>
  )
}
