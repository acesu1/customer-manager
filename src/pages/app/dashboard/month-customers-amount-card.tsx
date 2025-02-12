import { User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCustomersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Clientes (mês)</CardTitle>
        <User className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">

        <>
          <span className="text-2xl font-bold">
            78
          </span>
          <p className="text-xs text-muted-foreground">
            <span className="text-red-500">
              -36.07%
            </span>{' '}
            em relação ao mês passado
          </p>
        </>
      </CardContent>
    </Card>
  )
}
