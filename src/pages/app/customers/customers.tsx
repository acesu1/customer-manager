import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Button } from '@/components/ui/button'
import { ArrowRight, Search, X } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { ServiceDetails } from './service-details'

export function Customers() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]" />
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total</TableHead>
                <TableHead className="w-[164px]" />
                <TableHead className="w-[132px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="xs">
                            <Search className="size-3" />
                            <span className="sr-only">Detalhes do serviço</span>
                          </Button>
                        </DialogTrigger>

                        <ServiceDetails />
                      </Dialog>
                    </TableCell>

                    <TableCell className="font-mono text-xs font-medium">
                      okj7m1sanzoztq7jbwtztr4i
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      há 4 dias
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                        <span className="font-medium text-muted-foreground">
                          Pendente
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="font-medium">
                      Richard Quitzon
                    </TableCell>

                    <TableCell>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium">
                          20,94
                        </span>
                        <span className="text-xs text-muted-foreground">
                          3 serviços(s)
                        </span>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Button
                        variant="outline"
                        size="xs"
                      >
                        <ArrowRight className="mr-2 size-4" />
                        Aprovar
                      </Button>
                    </TableCell>

                    <TableCell>
                      <Button
                        variant="ghost"
                        size="xs"
                      >
                        <X className="mr-2 size-4" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
