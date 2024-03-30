import React from 'react'
import DashboardStatsGrid from '../components/Dashboard'
import TransactionChart from '../components/TransactionChart'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
				<TransactionChart />
		</div>
	)
}
