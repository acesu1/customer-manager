import { ReceiptChart } from './receipt-chart'
import { PopularServicesChart } from './popular-services-chart'
import { MonthReceiptCard } from './month-receipt-card'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthReceiptCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <ReceiptChart />
        <PopularServicesChart />
      </div>
    </div>
  )
}
