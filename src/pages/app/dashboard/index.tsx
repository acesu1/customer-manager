import { ReceiptChart } from './receipt-chart'
import { PopularServicesChart } from './popular-services-chart'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-6">
          <ReceiptChart />
        </div>

        <div className="col-span-3">
          <PopularServicesChart />
        </div>
      </div>
    </div>
  )
}