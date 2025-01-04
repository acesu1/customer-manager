import { DayServicesAmountCard } from './day-services-amount-card'
import { MonthCustomersAmountCard } from './month-customers-amount-card'
import { MonthReceiptCard } from './month-receipt-card'
import { PopularServicesChart } from './popular-services-chart'
import { ReceiptChart } from './receipt-chart'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthReceiptCard />
        <MonthCustomersAmountCard />
        <DayServicesAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <ReceiptChart />
        <PopularServicesChart />
      </div>
    </div>
  )
}
