import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="py-8 flex flex-1 flex-col gap-0.5 customDashboard">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="flex justify-end">
          <div
            className="flex-1 p-4 min-h-0 overflow-auto customDashboardBody"
            style={{ position: 'absolute',top: '20px', right: '20px' }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
