import { DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthReceiptCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <>
          <span className="text-2xl font-bold">
            R$ 1.031,63
          </span>
          <p className="text-xs text-muted-foreground">
            <span className="text-red-500">
              -42.31%
            </span>{' '}
            em relação ao mês passado
          </p>
        </>
      </CardContent>
    </Card>
  )
}
