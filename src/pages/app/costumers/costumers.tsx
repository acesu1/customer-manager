import { Search, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Customers() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Clientes</h1>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input
            placeholder="ID do serviço"
            className="h-8 w-auto"
          />
          <Input
            placeholder="Nome do cliente"
            className="h-8 w-[320px]"
          />

          <Select>
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue placeholder="Todos status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button type="submit" variant="secondary" size="xs">
            <Search className="size-4" />
            Filtrar resultados
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="xs"
          >
            <X className="size-4" />
            Remover filtros
          </Button>
        </div>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]" />
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do serviço</TableHead>
                <TableHead className="w-[164px]" />
                <TableHead className="w-[132px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do serviço</span>
                      </Button>
                    </TableCell>

                    <TableCell className="text-xs font-medium">
                      ylph18rfdzw3qrpkde2ta4cn
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      há 4 dias
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-amber-500" />
                        <span className="font-medium text-muted-foreground">
                          Pendente
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="font-medium">
                      Richard Quitzon
                    </TableCell>
                    <TableCell>
                      R$ 20,78
                    </TableCell>

                    <TableCell>
                      <Button variant="outline" size="xs">
                        <ArrowRight className="mr-2 size-4" />
                        Aprovar
                      </Button>
                    </TableCell>

                    <TableCell>
                      <Button variant="ghost" size="xs">
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
    </div>
  )
}
